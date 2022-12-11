import React from "react";
import { Resting } from "../assets";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from "swiper";

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
    image: Resting,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Resting,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Resting,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Resting,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Resting,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Resting,
  },
  {
    title: "How to get a six pack",
    subTitle: "Indoor | Outdoor | Gym",
    image: Resting,
  },
];

const CreatePost = ({ title, subTitle, image }: any) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[10vh]">
      <div className="w-80 h-80 relative">
        <img
          src={image}
          alt="image"
          className="absolute inset-0 bg-cover bg-center z-0 w-80 h-80"
        />
        <div className="flex flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-6xl text-white font-semibold">
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
        <h1 className="text-center font-poppins text-7xl font-bold">
          CHECK OUT OUR BLOGS
        </h1>
        <h2 className="text-center font-poppins text-2xl">
          Read our latest blogs and articles
        </h2>
      </div>
      <div className="pt-[5vh]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          effect={"flip"}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
