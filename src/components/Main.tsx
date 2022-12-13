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
          className="w-1/3 z-0"
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

        <div className="relative flex flex-col left-5 xs:left-10 z-10 justify-center ">
          <div className="absolute bottom-0">
            <div className="flex grow flex-row items-end">
              <img
                src={DownRightArrow}
                alt="down-right-arrow"
                className="w-1/6 h-1/6 "
              />
              <h2 className=" flex flex-col font-poppins text-base xs:text-xl ss:text-2xl sm:text-3xl font-bold pl-2 xs:pl-5">
                <span>NEW EVENT</span>
                <span className="flex flex-col min-[350px]:flex-row">
                  <span>COMING UP /</span> <span>DECEMBER 19-26</span>
                </span>
              </h2>
            </div>

            <h1 className="font-poppins text-[18vw] font-bold">CROSSFIT</h1>
          </div>
        </div>
      </div>

      <div className="bg-secondary h-auto flex flex-col  ">
        <div className="flex flex-col h-full px-[10vw] py-[12vw] md:w-2/3 z-10">
          <h2 className="font-poppins lg:text-5xl md:text-3xl text-2xl font-bold">
            BE YOURSELF, BUT STRONGER!
            <br />
            EMBRACE YOUR POWER
          </h2>
          <h3 className="pt-5 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </h3>
          <button className="bg-primary text-white font-poppins text-xl md:w-1/3 font-bold rounded-full mt-10 ">
            VIEW MORE
          </button>
        </div>

        <div className="relative md:right-20">
          <div className="md:absolute flex justify-center md:justify-end -bottom-10">
            <img
              src={Holding}
              alt="holding"
              className="object-scale-down w-1/2 md:w-1/4 hover:scale-105 transform transition duration-500 ease-in-out "
            />
          </div>
        </div>
      </div>

      <div className="bg-primary h-auto flex flex-col">
        <div className="flex justify-end">
          <div className="flex flex-col h-full p-[12vw] md:w-2/3 z-10">
            <h2 className="font-poppins lg:text-5xl md:text-3xl text-2xl font-bold">
              BE YOURSELF, BUT STRONGER!
              <br />
              EMBRACE YOUR POWER
            </h2>
            <h3 className="pt-5 font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </h3>
            <button className="bg-secondary text-white font-poppins text-xl md:w-1/3 font-bold rounded-full mt-10 ">
              VIEW MORE
            </button>
          </div>
        </div>

        <div className="relative md:left-20">
          <div className="md:absolute flex justify-center md:justify-start -bottom-10">
            <img
              src={Resting}
              alt="Resting"
              className="object-scale-down w-[70%] md:w-1/4 hover:scale-105 transform transition duration-500 ease-in-out "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
