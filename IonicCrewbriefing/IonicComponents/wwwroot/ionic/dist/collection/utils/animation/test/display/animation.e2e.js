/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { expect } from "@playwright/test";
import { configs, test } from "../../../test/playwright/index";
configs({ modes: ['md'], directions: ['ltr'] }).forEach(({ title, config }) => {
  test.describe(title('animation: display'), async () => {
    test(`should resolve using web animations`, async ({ page }) => {
      await page.goto('/src/utils/animation/test/display', config);
      await testDisplay(page);
    });
    test(`should resolve using css animations`, async ({ page }) => {
      await page.goto('/src/utils/animation/test/display?ionic:_forceCSSAnimations=true', config);
      await testDisplay(page);
    });
  });
});
const testDisplay = async (page) => {
  const ionAnimationFinished = await page.spyOnEvent('ionAnimationFinished');
  await page.click('.play');
  await ionAnimationFinished.next();
  await expect(ionAnimationFinished).toHaveReceivedEventDetail('AnimationBFinished');
  await ionAnimationFinished.next();
  await expect(ionAnimationFinished).toHaveReceivedEventDetail('AnimationAFinished');
  await ionAnimationFinished.next();
  await expect(ionAnimationFinished).toHaveReceivedEventDetail('AnimationRootFinished');
  await expect(ionAnimationFinished).toHaveReceivedEventTimes(3);
};