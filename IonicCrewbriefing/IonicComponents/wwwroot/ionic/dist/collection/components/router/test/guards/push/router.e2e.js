/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../../../utils/test/playwright/index";
import { setBeforeEnterHook, setBeforeLeaveHook } from "../test.utils";
configs({ modes: ['ios'], directions: ['ltr'] }).forEach(({ title, config }) => {
  test.describe(title('router: guards: router.push'), () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/src/components/router/test/guards`, config);
    });
    test('allow/allow', async ({ page }) => {
      // beforeEnter: allow, beforeLeave: allow
      await setBeforeEnterHook(page, 'allow');
      await page.click('#router-push');
      await page.waitForChanges();
      expect(page.url()).toContain('#/child');
      await page.click('ion-back-button');
      await page.waitForChanges();
      expect(page.url()).toContain('#/home');
    });
    test('block/allow', async ({ page }) => {
      // beforeEnter: block, beforeLeave: allow
      await setBeforeEnterHook(page, 'block');
      await page.click('#router-push');
      await page.waitForChanges();
      expect(page.url()).toContain('#/home');
    });
    test('redirect/allow', async ({ page }) => {
      // beforeEnter: redirect, beforeLeave: allow
      await setBeforeEnterHook(page, 'redirect');
      await page.click('#router-push');
      await page.waitForChanges();
      expect(page.url()).toContain('#/test');
      await page.click('ion-back-button');
      await page.waitForChanges();
      expect(page.url()).toContain('#/home');
    });
    test('allow/block', async ({ page }) => {
      // beforeEnter: allow, beforeLeave: block
      await setBeforeLeaveHook(page, 'block');
      await page.click('#router-push');
      await page.waitForChanges();
      expect(page.url()).toContain('#/child');
      await page.click('ion-back-button');
      await page.waitForChanges();
      expect(page.url()).toContain('#/child');
    });
    test('allow/redirect', async ({ page }) => {
      // beforeEnter: allow, beforeLeave: redirect
      await setBeforeLeaveHook(page, 'redirect');
      await page.click('#router-push');
      await page.waitForChanges();
      expect(page.url()).toContain('#/child');
      await page.click('ion-back-button');
      await page.waitForChanges();
      expect(page.url()).toContain('#/test');
    });
  });
});
