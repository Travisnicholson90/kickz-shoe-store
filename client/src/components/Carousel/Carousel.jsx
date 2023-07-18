// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Autoplay, Pagination, Scrollbar } from 'swiper';
import classes from './Carousel.module.css';

import NikeHero from '../../assets/images/nike-hero-unsplash.jpg';
import drMartins from '../../assets/images/dr-martins-unsplash.jpg';
import shoeShop from '../../assets/images/shoe-shop-unsplash.jpg';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';

const Carousel = () => {
  return (
    <>
    <Swiper className="mySwiper"
      autoplay={{delay: 5000}}
    
      fadeEffect={{crossFade: true}}
      modules={[Pagination, Pagination, Scrollbar, Autoplay]}  
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      scrollbar={{ draggable: true }}
      >
      <SwiperSlide>
        <img className={classes.img} src={NikeHero} alt="nike-hero" />
        <button className={classes.btn}>Shop Nike</button>
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.img} src={drMartins} alt="dr-martins-shoes" />
        <button className={classes.btn}>Shop Dr. Martins</button>
      </SwiperSlide>
      <SwiperSlide>
      <img className={classes.img} src={shoeShop} alt="shoe-shop-shopfront" />
      <button className={classes.btn}>Welcome to <span className={classes.brand}>KICKZ</span></button>
      </SwiperSlide>
    </Swiper>
    </>
  );
};

export default Carousel;