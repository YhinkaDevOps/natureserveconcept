"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import flower from "../../public/assets/agave.gif";
import medal from "../../public/assets/medal.gif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      name="about"
      className=" min-h-[300px] mx-auto py-4 md:py-16 flex flex-col bg-[#f1f6f2]"
    >
      <div className="px-4 lg:px-0">
        <div className="text-center mb-12">
          <p className="text-[#acbe40] text-4xl md:text-5xl font-bold inline">
            About Us
          </p>
        </div>

        <div className="flex flex-col md:flex-row max-w-[1080px] mx-auto gap-10">
          <div className="basis-1/2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper max-w-[500px]"
            >
              <SwiperSlide>
                <img src="/assets-two/about-9.jpg" alt="about-jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets-two/about-1.jpg" alt="about-jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets-two/about-25.jpg" alt="about-jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets-two/about-23.jpg" alt="about-jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets-two/about-27.jpg" alt="about-jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-7 basis-[50%]">
            <h3 className="roboto-bold text-4xl font-bold text-[#242424] text-left">
              Consider your garden as an extension of your indoor living area.
            </h3>

            {/* <p className="text-[#494949] text-xl">
              Our garden services include horticultural, landscaping,
              fumigation, consultation, and maintenance of all your gardening
              needs.
            </p> */}

            <p className="flex flex-col gap-3">
              <span>
                At Nature Concept & Allied Services Co., we specialize in
                breathing life into your outdoor spaces through our
                comprehensive garden maintenance and innovative landscaping
                solutions. With a keen eye for detail and a commitment to
                excellence, we customize our services to suit your unique needs,
                ensuring that every aspect of your project is executed to
                perfection.
              </span>
            </p>

            <span className="flex gap-10">
              <p className="flex gap-4">
                <Image src={flower} width={30} height={100} alt="bg-icon" />
                <h1 className="flex items-center justify-center font-bold">
                  Skilled Gardening Professional
                </h1>
              </p>
              <p className="flex gap-4">
                <Image src={medal} width={30} height={100} alt="bg-icon" />
                <h1 className="flex items-center justify-center font-bold">
                  Satisfaction Assured
                </h1>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
