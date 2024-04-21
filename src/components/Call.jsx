"use client";
import React from "react";
import { Link } from "react-scroll";

const Call = () => {
  return (
    <div className="call-bg max-h-[1000px] px-4 lg:px-0 py-20 bg-[#f6f6f6]">
      <div className="flex flex-col gap-7">
        <h4 className="text-4xl font-bold text-center text-white">
          We're here to assist you in making your green vision a reality.
        </h4>
        <h4 className="text-4xl font-bold text-center text-white">
          CALL US: +2348033301526
        </h4>
        <div className="text-center">
          <button className="text-white font-semibold px-7 py-3 rounded-md bg-[#077c05] hover:bg-orange-600 transition duration-300 ease-in-out">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-55}
            >
              CONTACT US
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Call;
