import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  slide1,
  slide2,
  slide3,
  DownRightArrow,
  Holding,
  Resting,
} from "../assets";

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
        className="w-auto md:w-4/12 md:h-fit z-0"
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

      <div className="absolute flex flex-col bottom-0 left-10 z-2 justify-center">
        <div className="flex flex-row items-end">
          <img
            src={DownRightArrow}
            alt="down-right-arrow"
            className="w-1/6 h-1/6 "
          />
          <h2 className="font-poppins text-3xl font-bold pl-5">
            NEW EVENT <br />
            COMING UP / DECEMBER 19-26
          </h2>
        </div>

        <h1 className="font-poppins text-[20rem] font-bold">CROSSFIT</h1>
      </div>

      <div className="bg-secondary h-auto">
        <div className="flex flex-col h-full p-56">
          <h2 className="font-poppins text-5xl font-bold">
            BE YOURSELF, BUT STRONGER!
            <br />
            EMBRACE YOUR POWER
          </h2>
          <h3 className="pt-5 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </h3>
          <button className="bg-primary text-white font-poppins w-1/4 text-xl font-bold py-3 px-10 rounded-full mt-10 ">
            VIEW MORE
          </button>
        </div>
      </div>
      <img
        src={Holding}
        alt="holding"
        className="absolute top-[100%] right-72 w-auto h-3/4 z-1 hover:scale-110 transform transition duration-500 ease-in-out"
      />

      <div className="bg-primary h-auto">
        <div className="h-full p-56 left-30">
          <div className="flex flex-col items-end">
            <h2 className="font-poppins text-5xl font-bold">
              NOW OR NEVER
              <br />
              TODAY IS YOUR DAY
            </h2>
            <h3 className="pt-5 font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </h3>
            <button className="bg-secondary text-white font-poppins w-1/4 text-xl font-bold py-3 px-10 rounded-full mt-10 ">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      <img
        src={Resting}
        alt="Resting"
        className="absolute top-[165%] left-72 w-auto h-3/4 z-1 hover:scale-110 transform transition duration-500 ease-in-out"
      />
    </div>
  );
};

export default Main;
