/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright/index";
configs().forEach(({ title, screenshot, config }) => {
  test.describe(title('skeleton-text: basic'), () => {
    test('should not have visual regressions', async ({ page }) => {
      await page.goto('/src/components/skeleton-text/test/basic', config);
      await page.setIonViewport();
      await expect(page).toHaveScreenshot(screenshot(`skeleton-text-basic`));
    });
  });
});
