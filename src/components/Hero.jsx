"use client";
import { Link } from "react-scroll";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import labimage from "../../public/assets-two/about-2.jpg";
import labimagetwo from "../../public/assets-two/about-12.jpg";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div name="/" className="bg-[#f7f7f7] min-h-screen">
      <div className="bg-text ">
        <div className="mt-4 md:mt-0">
          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="min-h-[500]px]">
              <div className="flex md:flex-row flex-col md:pt-16 gap-10 md:px-10">
                <div className="basis-1/2 flex flex-col space-y-6 md:space-y-5 text-black">
                  <h4 className="animate__animated  animate__backInLeft text-2xl md:text-4xl text-black text-start">
                    Nature Concept & Allied Services Co. Landscape Design
                    Solution
                  </h4>

                  <p className="animate__animated animate__backInUp text-start nav-text">
                    We specialize in breathing life into your outdoor spaces
                    through our comprehensive garden maintenance and innovative
                    landscaping solutions. With a keen eye for detail and a
                    commitment to excellence, we customize our services to suit
                    your unique needs, ensuring that every aspect of your
                    project is executed to perfection.
                  </p>

                  <div className="animate__animated animate__fadeInRightBig flex justify-center md:justify-start items-start">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-55}
                    >
                      <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-16 py-5">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="basis-1/2 hidden md:block">
                  <Image
                    src={labimage}
                    width={550}
                    height={10}
                    alt="lab-image"
                    className="rounded-lg "
                  />
                </div>
{/* 
                <div className="md:hidden">
                  <img
                    src="/assets-two/about-2.jpg"
                    alt="hero-image"
                    className="card-images rounded-3xl p-2"
                  />
                </div> */}
              </div>
            </SwiperSlide>

            <SwiperSlide className="min-h-[510px]">
              <div className="flex md:flex-row flex-col  md:pt-12 gap-10  md:px-10">
                <div className="basis-1/2 flex flex-col space-y-6 md:space-y-5 text-black">
                  <h4 className="text-2xl md:text-4xl text-black text-start">
                    Transforming Spaces: Premier Horticulture, Landscaping, and
                    Garden Solutions
                  </h4>

                  <p className="text-start nav-text">
                    We specialize in creating stunning landscapes and
                    maintaining beautiful gardens. Our expert team provides
                    comprehensive services, including horticulture, landscaping,
                    fumigation, consultation, and garden maintenance. Let us
                    transform your outdoor spaces into breathtaking, sustainable
                    environments.
                  </p>
                  <div className="flex justify-center md:justify-start items-start">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-55}
                    >
                      <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-16 py-5">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="basis-1/2 hidden md:block">
                  <Image
                    src={labimagetwo}
                    width={550}
                    height={10}
                    alt="lab-image"
                    className="rounded-lg "
                  />
                </div>

                {/* <div className="md:hidden">
                  <img
                    src="assets-two/about-12.jpg"
                    alt="hero-image"
                    className="card-images rounded-3xl p-2"
                  />
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
