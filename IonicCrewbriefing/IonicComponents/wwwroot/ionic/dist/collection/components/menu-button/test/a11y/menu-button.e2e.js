/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import AxeBuilder from "@axe-core/playwright";
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright/index";
configs({ directions: ['ltr'] }).forEach(({ title, config }) => {
  test.describe(title('menu-button: a11y'), () => {
    test('should not have accessibility violations', async ({ page }) => {
      await page.goto('/src/components/menu-button/test/a11y', config);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
    });
  });
});
