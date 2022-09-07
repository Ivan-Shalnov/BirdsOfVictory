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
