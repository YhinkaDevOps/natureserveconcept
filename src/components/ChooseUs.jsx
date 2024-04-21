"use client";
import React from "react";
import flower from "../../public/assets/flower-pot.gif";
import tree from "../../public/assets/tree.gif";
import fruit from "../../public/assets/fruit-tree.gif";
import wateringcan from "../../public/assets/watering-can.gif";
import Image from "next/image";
import { Link } from "react-scroll";

const ChooseUs = () => {
  return (
    <div className="min-h-[500px] px-4 lg:px-0 py-20 bg-[#f6f6f6]">
      <div className="max-w-[1100px] mx-auto">
        <h6 className="text-[#acbe40] text-center text-5xl font-bold mb-3">
          WHY CHOOSE US
        </h6>

        <div className="max-w-[1000px] mt-10 mx-auto font-sans">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-9 md:gap-7">
            <div className="flex flex-col gap-3">
              <div className="rounded flex justify-center items-center">
                <Image src={wateringcan} width={100} height={50} alt="cheque" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg text-center">
                  Decorative Garden
                </h5>
                <p className="text-justify">
                  With extensive expertise spanning more than a decade in garden
                  design, horticulture, and landscaping services, we excel in
                  delivering timely and cost-effective solutions for
                  residential, commercial, and industrial projects
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded flex justify-center items-center">
                <Image src={flower} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-center font-bold text-lg">
                  Back/Front Yard
                </h5>
                <p className="text-justify">
                  We offer a comprehensive range of services including indoor
                  and outdoor plant sales, landscaping, maintenance, weed
                  control, fumigation, and installation of flower pots, flags,
                  and stands for both home and office spaces.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded flex justify-center items-center">
                <Image src={tree} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-center font-bold text-lg">
                  Nursery/Tree Farm
                </h5>
                <p className="text-justify ">
                  We provide a variety of lawn maintenance services, including
                  mowing, edging, aerating (punch/slit trimming and hallow
                  trimming), and scarifying to remove moss and lawn thatch.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded flex justify-center items-center">
                <Image src={fruit} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-center font-bold text-lg">
                  Reliable Garden Renovation Services
                </h5>
                <p className="text-justify ">
                  We assess your yard's plants and features, identifying what
                  stays and what goes. Then, we select the perfect plants and
                  design plans to ensure a successful yard remodel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 font-bold">
        For More Information!{" "}
        <span className="text-[#077c05]  underline hover:opacity-50 cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-55}
          >
            CONTACT US
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ChooseUs;
