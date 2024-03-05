import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
function Carousel({ slides }) {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      speed={700}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <img src={slide} alt="" />
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <FaArrowCircleLeft />
      </div>
      <div className="button-next">
        <FaArrowCircleRight />
      </div>
    </Swiper>
  );
}

export default Carousel;
