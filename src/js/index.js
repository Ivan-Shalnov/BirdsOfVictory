// import Swiper JS
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
// import Swiper styles
import 'swiper/swiper.min.css';
const containerOffset = document.querySelector('.container').offsetLeft;

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev',
    disabledClass: 'swiper__btn-disabled',
  },
  spaceBetween: 15,
  breakpoints: {
    1200: {
      slidesPerView: 1.57,
      slidesOffsetBefore: containerOffset,
      slidesOffsetAfter: containerOffset,
      spaceBetween: 100,
    },
  },
});
