/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright/index";
configs({ directions: ['ltr'] }).forEach(({ title, screenshot, config }) => {
  test.describe(title('range: customization'), () => {
    test('should be customizable', async ({ page }) => {
      await page.goto(`/src/components/range/test/custom`, config);
      const range = page.locator('ion-range');
      expect(await range.screenshot()).toMatchSnapshot(screenshot(`range-custom`));
    });
  });
});
