/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

const index = require('./index-484b1104.js');
const index$1 = require('./index-10873539.js');
const helpers = require('./helpers-ea4ccbcb.js');
require('./index-cc7dfb7c.js');

const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    index.readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = index$1.findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => helpers.componentOnReady(contentEl, resolve)).then(() => {
          index.writeTask(async () => {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            await index$1.scrollToTop(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          });
        });
      }
    });
  });
};

exports.startStatusTap = startStatusTap;