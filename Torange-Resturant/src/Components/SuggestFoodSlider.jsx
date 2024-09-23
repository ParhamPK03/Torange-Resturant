import { Swiper, SwiperSlide } from 'swiper/react';
import { Food_list } from '../assets/Item_Infoes';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import SuggetFoodBox from './SuggestFoodBox';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper"
        breakpoints={{
          
          1380: {
            slidesPerView: 4,
          },
          
          1024: {
            slidesPerView: 3,
          },
          
          768: {
            slidesPerView: 2,
          },
          
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {Food_list.slice(20, 30).map((item, index) => (
          <SwiperSlide key={index}>
            <SuggetFoodBox
              title={item.title}
              text={item.text}
              id={item._id}
              img={item.img}
              newprice={item.newprice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
