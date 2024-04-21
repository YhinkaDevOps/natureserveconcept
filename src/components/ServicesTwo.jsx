"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesTwo = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl: "https://neatyard.ng/wp-content/uploads/2022/06/image-6.jpg",
      header: "Garden Care",
      text: "Through enhancing growth in the vital sector of water production, House of Flourish Nig Ltd. advances water security, poverty alleviation, and employment opportunities.",
    },
    {
      id: 2,
      imageUrl:
        "https://neatyard.ng/wp-content/uploads/2022/06/image-13-295x239.jpg",
      header: "Lawn moving",
      text: "By obtaining a better growth rate in this crucial area of the economy, House of Flourish Nig Ltd. promotes food security, the reduction of poverty, and employment possibilities",
    },
    {
      id: 3,
      imageUrl: "https://neatyard.ng/wp-content/uploads/2022/06/2-1.jpg",
      header: "Landscape design",
      text: "House of Flourish Nig Ltd. is a strong supporter of education since it equips people with the knowledge and abilities required to maintain good health, find employment, and promote tolerance.",
    },
    {
      id: 4,
      imageUrl:
        "https://predominantlygreen.ng/wp-content/uploads/2021/10/Predominantly-Green-Gardens-23.png",
      header: "Fumigation",
      text: "At House of Flourish Nig Ltd., we offer suggestions and aid buyers and sellers in marketing and acquiring real estate at the finest price and conditions. figuring out the needs and resources of the client in order to recommend solutions that work for them.",
    },
  ];

  return (
    <div
      name="service"
      className="bg-[#2f4628] text-white min-h-[300px] mx-auto py-16"
    >
      <div className="px-4 lg:px-0">
        <div className="text-center mb-10">
          <p className=" font-bold inline opacity-50">
            WELCOME TO NATURE CONCEPT & ALLIED SERVICES CO.
          </p>
        </div>

        <p className="mx-auto max-w-[1100px] text-center text-4xl font-bold">
          {" "}
          We Are a Gardening Company Based in Nigeria, that Provides
        </p>
        <p className="mx-auto max-w-[1100px] text-3xl text-center font-bold mt-5">
          {" "}
          Horticulture, landscaping, fumigation, consultation, and maintenance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6 mx-auto max-w-[1000px] md:p-2 mt-20">
        {cardsData.map((card) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={card.id}
            className="flex flex-col gap-4 "
          >
            <img
              src={card.imageUrl}
              alt={card.header}
              className="card-image rounded-[50%] p-2"
            />
            <div className="flex flex-col gap-3 md:gap-6 p-2">
              <h3 className="font-bold text-lg text-center">{card.header}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTwo;
