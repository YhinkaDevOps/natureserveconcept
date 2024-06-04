"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../public/assets-two/about-9.jpg";
import image2 from "../../public/assets/image-2.jpg";
import image3 from "../../public/assets-two/about-24.jpg";
import image4 from "../../public/assets/image-4.jpg";
import image5 from "../../public/assets/image-5.jpg";
import image6 from "../../public/assets/image-6.jpg";
import image7 from "../../public/assets-two/about-26.jpg";
import image8 from "../../public/assets-two/about-16.jpg";
import image9 from "../../public/assets-two/about-19.jpg";
import image10 from "../../public/assets-two/about-37.jpeg";
import image11 from "../../public/assets-two/about-38.jpeg";
import image12 from "../../public/assets-two/about-39.jpeg";
import image13 from "../../public/assets-two/about-41.jpg";
import image14 from "../../public/assets-two/about-42.jpg";
import image15 from "../../public/assets-two/about-43.jpg";
import image16 from "../../public/assets-two/about-44.jpg";
import image17 from "../../public/assets-two/about-45.png";
import image18 from "../../public/assets-two/about-46.png";

const Gallery = () => {
  let dataCard = [
    {
      id: 1,
      imgSrc: image1,
    },
    {
      id: 2,
      imgSrc: image2,
    },
    {
      id: 3,
      imgSrc: image3,
    },
    {
      id: 4,
      imgSrc: image4,
    },
    {
      id: 5,
      imgSrc: image5,
    },
    {
      id: 6,
      imgSrc: image6,
    },
    {
      id: 7,
      imgSrc: image7,
    },
    {
      id: 8,
      imgSrc: image8,
    },
    {
      id: 9,
      imgSrc: image9,
    },
    {
      id: 10,
      imgSrc: image10,
    },
    {
      id: 11,
      imgSrc: image11,
    },
    {
      id: 12,
      imgSrc: image12,
    },
    {
      id: 13,
      imgSrc: image13,
    },
    {
      id: 14,
      imgSrc: image14,
    },
    {
      id: 15,
      imgSrc: image15,
    },
    {
      id: 16,
      imgSrc: image16,
    },
    {
      id: 17,
      imgSrc: image17,
    },
    {
      id: 18,
      imgSrc: image18
    },
  ];


  return (
    <div name="gallery" className="min-h-[500px] lg:px-0 py-20 bg-[#f6f6f6]">
      <div className="max-w-[1100px] mx-auto mb-10">
        <h6 className="text-[#acbe40] text-center text-4xl md:text-5xl font-bold mb-3">
          GALLERY
        </h6>
      </div>

      <div className="px-4 grid gap-5 grid-cols-1 md:grid-cols-3 max-w-[1300px] mx-auto py-10">
        {dataCard.map((card) => (
          <div
            key={card.id}
            className=""
            onClick={() => getImg(card.imgSrc)}
          >
            <Image src={card.imgSrc} alt="" className="w-full rounded-md card-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
