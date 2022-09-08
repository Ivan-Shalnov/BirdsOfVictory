import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

import ClipboardJS from 'clipboard';

window.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
  });

  // SCROLL EVENTS
  scroll.on('call', event => {
    if (event === 'stat-section-inview')
      countersInts.forEach(counter => counter.start());
  });
  // SCROLL EVENTS
  scroll.update();
});

// COPY ACCOUNT NUMBER TO CLIPBOARD
{
  const buttons = document.querySelectorAll('[data-clipboard-text]');
  const clipboard = new ClipboardJS(buttons);
  // Message on success
  clipboard.on('success', function (e) {
    showHideMessage(e.trigger);
    setTimeout(showHideMessage, 1000, e.trigger);
  });
  function showHideMessage(btn) {
    btn.classList.toggle('sucessfull');
  }
}
// COPY ACCOUNT NUMBER TO CLIPBOARD

document.querySelector('.menu-mobile__btn').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('active');
});

const mobileLink = document.getElementsByClassName('scroll-to');
for (let i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener('click', event => {
    const isButton = event.target.nodeName === 'BUTTON';
    document.querySelector('.mobile-menu').classList.toggle('active');
    if (!isButton) {
      return;
    }
  });
}
