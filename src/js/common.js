import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
export const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smoothMobile: true,
});

document.querySelector('.menu-mobile__btn').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('active');
});

const mobileLink = document.getElementsByClassName('scroll-to');
for (let i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener('click', event => {
    document.querySelector('.mobile-menu').classList.toggle('active');
  });
}
