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
        1230: {
          slidesPerView: 1.57,
          slidesOffsetBefore: containerOffset,
          slidesOffsetAfter: containerOffset,
          spaceBetween: 100,
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
