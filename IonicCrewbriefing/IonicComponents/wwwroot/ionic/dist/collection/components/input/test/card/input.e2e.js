/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright/index";
configs({ modes: ['md'], directions: ['ltr'] }).forEach(({ title, screenshot, config }) => {
  test.describe(title('input: card'), () => {
    test('should render correctly in card', async ({ page }) => {
      await page.setContent(`
        <ion-card>
          <ion-card-content>
            <ion-item style="border: 1px solid grey" lines="none">
              <ion-input label="input" label-placement="stacked"></ion-input>
            </ion-item>
          </ion-card-content>
        </ion-card>
      `, config);
      const card = page.locator('ion-card');
      expect(await card.screenshot()).toMatchSnapshot(screenshot(`input-card`));
    });
  });
});
