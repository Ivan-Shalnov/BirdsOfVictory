import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

// import Swiper JS
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
import 'swiper/swiper.min.css';

// IMPORT COUNTUP
import { CountUp } from 'countup.js';

window.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
  });
  // COUNTUP STATISTICS
  let countersInts = [];
  {
    const refs = [...document.querySelectorAll('.statistics [data-countup]')];
    countersInts = refs.map(initCountUp);
    function initCountUp(element) {
      const finishValue = +element.textContent;
      const counter = new CountUp(element, finishValue, {
        startVal: 0,
        duration: 3,
        useEasing: true,
      });
      return counter;
    }
  }
  // COUNTUP STATISTICS

  // SWIPER INIT
  {
    const containerOffset = document.querySelector('.container').offsetLeft;
    const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper__btn-next',
        prevEl: '.swiper__btn-prev',
        disabledClass: 'swiper__btn-disabled',
      },
      spaceBetween: 15,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 100,
          slidesOffsetBefore: containerOffset,
          slidesOffsetAfter: containerOffset,
        },
        992: {
          slidesPerView: 1.57,
          spaceBetween: 100,
          slidesOffsetBefore: containerOffset,
          slidesOffsetAfter: containerOffset,
        },
        1230: {
          slidesPerView: 1.57,
          spaceBetween: 100,
          slidesOffsetBefore: containerOffset,
          slidesOffsetAfter: containerOffset,
        },
      },
    });
  }
  // SWIPER INIT

  // SCROLL EVENTS
  scroll.on('call', event => {
    if (event === 'stat-section-inview')
      countersInts.forEach(counter => counter.start());
  });
  // SCROLL EVENTS
  scroll.update();
});

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
