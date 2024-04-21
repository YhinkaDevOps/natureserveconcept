"use client";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="/" className="hero-image min-h-screen">
      <div className="bg-text mt-28">
        <div className="flex flex-col md:flex-row gap-5 basis-[40%]">
          <h1 className="text-4xl font-bold font-sans flex items-center justify-center">
            Nature Concept & Allied Services Co. Landscape Design Solution
          </h1>

          <div className="flex flex-col gap-5 basis-[60%]">
            <p className="font-semibold font-sans">
              At Nature Concept & Allied Services Co., we offer comprehensive
              garden services encompassing horticulture, landscaping,
              fumigation, and maintenance to fulfill all your gardening
              requirements. Our dedication stems from our passion for our work
              and our expertise in creating tranquil and serene environments,
              whether it's for residential homes, office spaces, or public
              areas.
            </p>

            <div>
              <Link
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
              >
                <button className="text-white font-semibold py-4 px-7 rounded-md bg-blue-600 hover:opacity-50">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
