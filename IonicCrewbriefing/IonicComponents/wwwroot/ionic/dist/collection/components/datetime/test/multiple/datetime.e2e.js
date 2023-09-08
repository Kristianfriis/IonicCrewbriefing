/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright/index";
const SINGLE_DATE = '2022-06-01';
const MULTIPLE_DATES = ['2022-06-01', '2022-06-02', '2022-06-03'];
const MULTIPLE_DATES_SEPARATE_MONTHS = ['2022-04-01', '2022-05-01', '2022-06-01'];
class DatetimeMultipleFixture {
  constructor(page) {
    this.page = page;
  }
  processValue(value = []) {
    if (!Array.isArray(value)) {
      return `'${value}'`;
    }
    const toString = value.map((v) => `'${v}'`).join(',');
    return `[${toString}]`;
  }
  async goto(config, value, datetimeConfig) {
    const { showDefaultButtons, showClearButton, showDefaultTitle, multiple, customFormatter } = datetimeConfig !== null && datetimeConfig !== void 0 ? datetimeConfig : {};
    const formattedValue = this.processValue(value);
    await this.page.setContent(`
      <ion-datetime
        locale="en-US"
        presentation="date"
        multiple="${multiple !== null && multiple !== void 0 ? multiple : true}"
        value="2022-04-19T04:20:00"
        show-default-title="${showDefaultTitle !== null && showDefaultTitle !== void 0 ? showDefaultTitle : false}"
        show-default-buttons="${showDefaultButtons !== null && showDefaultButtons !== void 0 ? showDefaultButtons : false}"
        show-clear-button="${showClearButton !== null && showClearButton !== void 0 ? showClearButton : false}"
      ></ion-datetime>

      <script>
        const datetime = document.querySelector('ion-datetime');
        datetime.value = ${formattedValue};

        if (${customFormatter}) {
          datetime.titleSelectedDatesFormatter = (selectedDates) => "Selected: " + selectedDates.length;
        }
      </script>
    `, config);
    this.datetime = this.page.locator('ion-datetime');
    await this.page.waitForSelector('.datetime-ready');
    return this.datetime;
  }
  async expectMultipleDatePicker(id, screenshot) {
    await expect(this.datetime).toHaveScreenshot(screenshot(`datetime-multiple-${id}`));
  }
}
configs().forEach(({ title, screenshot, config }) => {
  test.describe(title('datetime: multiple date selection (visual regressions)'), () => {
    let datetimeFixture;
    test.beforeEach(async ({ page }) => {
      datetimeFixture = new DatetimeMultipleFixture(page);
    });
    test('single default value should not have visual regressions', async () => {
      await datetimeFixture.goto(config, SINGLE_DATE);
      await datetimeFixture.expectMultipleDatePicker('singleDefaultValue', screenshot);
    });
    test('multiple default values should not have visual regressions', async () => {
      await datetimeFixture.goto(config, MULTIPLE_DATES);
      await datetimeFixture.expectMultipleDatePicker('multipleDefaultValues', screenshot);
    });
    test('header should not have visual regressions', async () => {
      await datetimeFixture.goto(config, SINGLE_DATE, { showDefaultTitle: true });
      await datetimeFixture.expectMultipleDatePicker('withHeader', screenshot);
    });
  });
});
/**
 * Multiple date selection functionality
 * is the same across modes/directions.
 */
configs({ modes: ['md'], directions: ['ltr'] }).forEach(({ title, config }) => {
  test.describe(title('datetime: multiple date selection (functionality)'), () => {
    let datetimeFixture;
    test.beforeEach(async ({ page }) => {
      datetimeFixture = new DatetimeMultipleFixture(page);
    });
    test('clicking unselected days should select them', async ({ page }) => {
      const datetime = await datetimeFixture.goto(config, SINGLE_DATE);
      const ionChangeSpy = await page.spyOnEvent('ionChange');
      const juneButtons = datetime.locator('[data-month="6"][data-day]');
      await juneButtons.nth(1).click();
      await ionChangeSpy.next();
      await expect(datetime).toHaveJSProperty('value', ['2022-06-01', '2022-06-02']);
      await juneButtons.nth(2).click();
      await ionChangeSpy.next();
      await expect(datetime).toHaveJSProperty('value', MULTIPLE_DATES);
      for (let i = 0; i < 3; i++) {
        await expect(juneButtons.nth(i)).toHaveClass(/calendar-day-active/);
      }
    });
    test('clicking selected days should unselect them', async ({ page }) => {
      const datetime = await datetimeFixture.goto(config, MULTIPLE_DATES);
      const juneButtons = datetime.locator('[data-month="6"][data-day]');
      const ionChangeSpy = await page.spyOnEvent('ionChange');
      await juneButtons.nth(0).click();
      await ionChangeSpy.next();
      await expect(datetime).toHaveJSProperty('value', ['2022-06-02', '2022-06-03']);
      await juneButtons.nth(1).click();
      await ionChangeSpy.next();
      await expect(datetime).toHaveJSProperty('value', ['2022-06-03']);
      await juneButtons.nth(2).click();
      await ionChangeSpy.next();
      await expect(datetime).toHaveJSProperty('value', undefined);
      for (let i = 0; i < 3; i++) {
        await expect(juneButtons.nth(i)).not.toHaveClass(/calendar-day-active/);
      }
    });
    test('change event should emit with array detail', async ({ page }) => {
      const datetime = await datetimeFixture.goto(config, SINGLE_DATE);
      const june2Button = datetime.locator('[data-month="6"][data-day="2"]');
      const ionChangeSpy = await page.spyOnEvent('ionChange');
      await june2Button.click();
      expect(ionChangeSpy).toHaveReceivedEventDetail({
        value: ['2022-06-01', '2022-06-02'],
      });
    });
    test('multiple default values across months should display at least one value', async () => {
      const datetime = await datetimeFixture.goto(config, MULTIPLE_DATES_SEPARATE_MONTHS);
      const monthYear = datetime.locator('.calendar-month-year');
      await expect(monthYear).toHaveText(/April 2022/);
    });
    test('with buttons, should only update value when confirm is called', async ({ page }) => {
      const datetime = await datetimeFixture.goto(config, SINGLE_DATE, { showDefaultButtons: true });
      const june2Button = datetime.locator('[data-month="6"][data-day="2"]');
      await june2Button.click();
      await page.waitForChanges();
      await expect(datetime).toHaveJSProperty('value', SINGLE_DATE); // value should not change yet
      await datetime.evaluate((el) => el.confirm());
      await expect(datetime).toHaveJSProperty('value', ['2022-06-01', '2022-06-02']);
    });
    test('clear button should work with multiple values', async () => {
      const datetime = await datetimeFixture.goto(config, SINGLE_DATE, {
        showClearButton: true,
        showDefaultButtons: true,
      });
      const june2Button = datetime.locator('[data-month="6"][data-day="2"]');
      const doneButton = datetime.locator('#confirm-button');
      const clearButton = datetime.locator('#clear-button');
      await june2Button.click();
      await doneButton.click();
      await clearButton.click();
      await expect(datetime).toHaveJSProperty('value', undefined);
    });
    test('setting value programmatically should update active days', async () => {
      const datetime = await datetimeFixture.goto(config, SINGLE_DATE);
      const juneButtons = datetime.locator('[data-month="6"][data-day]');
      await datetime.evaluate((el, dates) => {
        el.value = dates;
      }, MULTIPLE_DATES);
      for (let i = 0; i < 3; i++) {
        await expect(juneButtons.nth(i)).toHaveClass(/calendar-day-active/);
      }
      // ensure all days are still highlighted if we click another one after
      await juneButtons.nth(3).click();
      for (let i = 0; i < 4; i++) {
        await expect(juneButtons.nth(i)).toHaveClass(/calendar-day-active/);
      }
    });
    test('clicking day when no default value should set value to only clicked day', async ({ page }) => {
      const datetime = await datetimeFixture.goto(config);
      const ionChangeSpy = await page.spyOnEvent('ionChange');
      // can't use specific data-month b/c no default value -- we don't know what it'll be
      const firstDayButton = datetime.locator('.calendar-month:nth-child(2) [data-day="1"]');
      const year = await firstDayButton.getAttribute('data-year');
      let month = await firstDayButton.getAttribute('data-month');
      if (month && month.length < 2)
        month = '0' + month; // pad with zero
      await firstDayButton.click();
      await ionChangeSpy.next();
      await expect(datetime).toHaveJSProperty('value', [`${year}-${month}-01`]);
    });
    test('header text should update correctly', async () => {
      const datetime = await datetimeFixture.goto(config, SINGLE_DATE, { showDefaultTitle: true });
      const header = datetime.locator('.datetime-selected-date');
      const juneButtons = datetime.locator('[data-month="6"][data-day]');
      await expect(header).toHaveText('Wed, Jun 1');
      await juneButtons.nth(1).click();
      await expect(header).toHaveText('2 days');
      await juneButtons.nth(0).click();
      await expect(header).toHaveText('Thu, Jun 2');
      await juneButtons.nth(1).click();
      await expect(header).toHaveText('0 days');
    });
    test('header text should update correctly with custom formatter', async () => {
      const datetime = await datetimeFixture.goto(config, MULTIPLE_DATES, {
        showDefaultTitle: true,
        customFormatter: true,
      });
      const header = datetime.locator('.datetime-selected-date');
      const juneButtons = datetime.locator('[data-month="6"][data-day]');
      await expect(header).toHaveText('Selected: 3');
      await juneButtons.nth(1).click();
      await juneButtons.nth(2).click();
      await expect(header).toHaveText('Wed, Jun 1');
      await juneButtons.nth(0).click();
      await expect(header).toHaveText('Selected: 0');
    });
    test('header text should render default date when multiple="false"', async ({ page }) => {
      await page.setContent(`
        <ion-datetime locale="en-US" show-default-title="true"></ion-datetime>

        <script>
          const mockToday = '2022-10-10T16:22';
          Date = class extends Date {
            constructor(...args) {
              if (args.length === 0) {
                super(mockToday)
              } else {
                super(...args);
              }
            }
          }
        </script>
      `, config);
      await page.waitForSelector(`.datetime-ready`);
      const datetime = page.locator('ion-datetime');
      const header = datetime.locator('.datetime-selected-date');
      await expect(header).toHaveText('Mon, Oct 10');
    });
  });
});