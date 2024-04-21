import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#222222] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 ">
        <div className="flex gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            <Image
              src="/assets/logo-bg.png"
              width={50}
              height={65}
              alt="footer-logo"
            />
          </span>

          <span className="flex justify-center items-center text-sm">
            Nature Concept & Allied Services Co.
          </span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2 items-start">
            <button className="hover:opacity-70 text-2xl flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          <span className="text-sm">
            Phone: +(234) 08033301526
            <br />
          </span>
          <span className="text-sm">
            <p>Email: natureserveconcept@gmail.com</p>
          </span>
          <span className="text-sm">
            Address: 5, Ikorodu Road, Maryland, Lagos, Nigeria
          </span>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            <button className="hover:opacity-70">
              <Link href="https://www.instagram.com/natureserveconcept/">
                <FaInstagram size={30} />
              </Link>
            </button>
          </div>
        </div>

        {/* Company*/}
        {/* <div className="pt-2 flex flex-col gap-2 items-start">
          <button className="font-bold text-2xl">Useful Links</button>
          <Link to="/">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Home
            </button>
          </Link>
          <Link to="about">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              About
            </button>
          </Link>
          <Link to="service">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Services
            </button>
          </Link>
          <Link to="service">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Gallery
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
