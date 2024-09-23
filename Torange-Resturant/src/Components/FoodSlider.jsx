import { Swiper, SwiperSlide } from 'swiper/react';
import { Food_list } from '../assets/Item_Infoes';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import MiddleMain from './MiddleMain';


export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
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
      >
        {Food_list.slice(20, 40).map((item, index) => (
          <SwiperSlide key={index}>
            <MiddleMain
              title={item.title} 
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
