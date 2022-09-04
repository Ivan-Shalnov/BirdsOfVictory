import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
new Splide('.splide', {
  classes: {
    arrows: 'splide__arrows our-drones__arrows',
    arrow: 'splide__arrow our-drones__arrow',
    prev: 'splide__arrow--prev our-drones__prev',
    next: 'splide__arrow--next our-drones__next',
  },
}).mount();
