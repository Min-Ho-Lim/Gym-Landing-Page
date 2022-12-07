import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slide1, slide2, slide3, DownRightArrow } from "../assets";

const Main = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="w-auto md:w-4/12 md:h-fit z-0 "
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide1" />
        </SwiperSlide>
      </Swiper>

      <div className="absolute flex flex-col bottom-0 left-10 z-1 justify-center">
        <div className="flex flex-row items-end">
          <img
            src={DownRightArrow}
            alt="down-right-arrow"
            className="w-1/6 h-1/6 "
          />
          <h2 className="text-3xl font-bold pl-5">
            NEW EVENT <br />
            COMING UP / DECEMBER 19-26
          </h2>
        </div>

        <h1 className="text-[20rem] font-bold">CROSSFIT</h1>
      </div>

      <div className="h-3/5">test</div>
    </div>
  );
};

export default Main;
