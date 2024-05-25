"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gardenone from "../../public/assets-two/about-30.jpg";
import gardentwo from "../../public/assets-two/about-31.jpg";
import gardenthree from "../../public/assets-two/about-32.jpg";
import gardenfour from "../../public/assets-two/about-33.jpg";
import gardenfive from "../../public/assets-two/about-34.jpg";
import gardensix from "../../public/assets-two/about-35.jpg";

const GardenDesign = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl: gardenone,
    },
    {
      id: 2,
      imageUrl: gardentwo,
    },
    {
      id: 3,
      imageUrl: gardenthree,
    },
    {
      id: 4,
      imageUrl: gardenfour,
    },
    {
      id: 5,
      imageUrl: gardenfive,
    },
    {
      id: 6,
      imageUrl: gardensix,
    },
  ];

  return (
    <div className=" min-h-[300px] mx-auto py-16 flex flex-col">
      <div className="px-4 lg:px-0">
        <div className="text-center mb-12">
          <p className="text-[#acbe40] text-4xl md:text-5xl font-bold inline">
            Garden Landscape Design
          </p>
          <p className=" mt-6 md:px-20 font-semibold">
            We excel in garden landscape design, crafting visually appealing and
            functional outdoor spaces tailored to your needs. Our skilled
            designers blend creativity with expertise to transform any garden
            into a lush, serene oasis. Whether you seek a contemporary look or a
            classic garden, we bring your vision to life with precision and
            care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:gap-6 mx-auto max-w-[1200px]">
        {cardsData.map((card) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={card.id}
            className="flex flex-col gap-4 bg-white rounded-lg"
          >
            <Image
              src={card.imageUrl}
              width={300}
              height={200}
              alt={card.header}
              className="card-image_ rounded-3xl p-2"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GardenDesign;
