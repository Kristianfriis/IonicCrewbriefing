/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright/index";
configs({ modes: ['md'], directions: ['ltr'] }).forEach(({ title, config }) => {
  test.describe(title('menu-toggle: basic'), () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/src/components/menu-toggle/test/basic`, config);
    });
    test('should open selected menu by side', async ({ page }) => {
      const startMenu = page.locator('[menu-id="start-menu"]');
      const endMenu = page.locator('[menu-id="end-menu"]');
      const menuToggle = page.locator('ion-menu-toggle');
      // do this outside testMenu since passing params to eval callback is tricky due to execution context
      await menuToggle.evaluate((el) => (el.menu = 'start'));
      await testMenu(page, startMenu);
      await menuToggle.evaluate((el) => (el.menu = 'end'));
      await testMenu(page, endMenu);
    });
    test('should open selected menu by menu-id', async ({ page }) => {
      const startMenu = page.locator('[menu-id="start-menu"]');
      const endMenu = page.locator('[menu-id="end-menu"]');
      const menuToggle = page.locator('ion-menu-toggle');
      // do this outside testMenu since passing params to eval callback is tricky due to execution context
      await menuToggle.evaluate((el) => (el.menu = 'start-menu'));
      await testMenu(page, startMenu);
      await menuToggle.evaluate((el) => (el.menu = 'end-menu'));
      await testMenu(page, endMenu);
    });
  });
});
async function testMenu(page, menu) {
  const ionDidOpen = await page.spyOnEvent('ionDidOpen');
  const ionDidClose = await page.spyOnEvent('ionDidClose');
  await page.click('ion-menu-toggle');
  await ionDidOpen.next();
  await expect(menu).toHaveClass(/show-menu/);
  await menu.evaluate(async (el) => {
    await el.close();
  });
  await ionDidClose.next();
}
