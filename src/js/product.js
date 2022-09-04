// import Swiper JS
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
// import Swiper styles
import 'swiper/swiper.min.css';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  //   navigation: {
  //     nextEl: '.swiper__btn-next',
  //     prevEl: '.swiper__btn-prev',
  //     disabledClass: 'swiper__btn-disabled',
  //   },
});
