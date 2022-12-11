import React from "react";
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6 } from "../assets";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-flip";

const posts = [
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog1,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog2,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog3,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog4,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog5,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog6,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Blog4,
  },
];

const CreatePost = ({ title, subTitle, image }: any) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[10vh]">
      <div className="w-full h-60 md:h-80 relative">
        <img
          src={image}
          alt="image"
          className="absolute inset-0 z-0 object-fill w-full h-full hover:brightness-50 duration-300"
        />
        <div className="flex flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-6xl text-white font-semibold bg-black bg-opacity-50">
          <h1 className="font-poppins text-xl font-bold text-white">{title}</h1>
          <h2 className="font-poppins text-sm text-white">{subTitle}</h2>
        </div>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  return (
    <div>
      <div className="pt-[10vh]">
        <h1 className="text-center font-poppins text-2xl sm:text-5xl md:text-7xl font-bold">
          CHECK OUT OUR BLOGS
        </h1>
        <h2 className="text-center font-poppins text-md sm:text-lg md:text-2xl">
          Read our latest blogs and articles
        </h2>
      </div>
      <div className="pt-[5vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1060: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
        >
          {posts.map((post) => (
            <SwiperSlide>
              <CreatePost
                title={post.title}
                subTitle={post.subTitle}
                image={post.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPosts;
