import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// import img1 from "../assets/img11.jpg";
// import img2 from "../assets/img12.jpg";
// import img3 from "../assets/img13.jpg";
import {icons} from '../utils/icons'

function ImageSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{
          border: "1px slid red",
          width: "80vw",
          padding: "20px",
        }}
      >
        <SwiperSlide>
          <img
            src={icons().sliderImage1}
            alt="img1"
            style={{
              height: "50vh",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icons().sliderImage2}
            alt="img2"
            style={{
              height: "50vh",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icons().sliderImage3}
            alt="img3"
            style={{
              height: "50vh",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageSlider;
