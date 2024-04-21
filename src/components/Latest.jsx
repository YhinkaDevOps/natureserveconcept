import React from "react";

const Latest = () => {
  return (
    <div className="w-full min-h-[500px] py-16 text-black ">
      <div className="text-center mb-10">
        <div className="text-center mb-4">
          <p className="text-[#acbe40] text-4xl md:text-5xl font-bold inline">
            TESTIMONIAL
          </p>
        </div>
        <p className="text-xl text-[#71717a] mt-3">
          What our customers say about us
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1100px] p-2 ">
        <div className="neat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "Nature Concept & Allied Services Co. completely transformed our
              backyard into a stunning oasis. Their attention to detail and
              creativity exceeded our expectations. We couldn't be happier with
              the result."
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Adesola Gbadamosi
            </p>
          </div>
        </div>
        <div className="neat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "Working with Nature Concept & Allied Services Co. was a pleasure
              from start to finish. They listened to our ideas and brought them
              to life with their expertise and professionalism. Our garden has
              become the envy of the neighborhood!"
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Olayinka Kunmi
            </p>
          </div>
        </div>
        <div className="neat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "I highly recommend Nature Concept & Allied Services Co. for all
              your landscaping needs. Their team of specialists are truly
              passionate about what they do, and it shows in the quality of
              their work. Our outdoor space has never looked better!"
            </p>
            <p className="mt-4 text-center font-semibold text-white">
             Aishat Bakare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
