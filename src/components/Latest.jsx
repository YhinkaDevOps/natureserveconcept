import React from "react";

const Latest = () => {
  return (
    <div className="w-full min-h-[500px] py-16 text-black ">
      <div className="text-center mb-10">
        <div className="text-center mb-4">
          <p className="text-[#acbe40] text-3xl md:text-5xl font-bold inline">
            What our customers say about us
          </p>
        </div>
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1100px] p-2 ">
        <div className="neat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "Nature Concept has broughr nature right into our home. The arrangement of the plants is absolutely beautiful. It is really nice when you see flowers open or bloom within the premises. I will recommend their services to anyone wishing to hire such expertise".
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Taiwo Onanuga
            </p>
          </div>
        </div>
        <div className="neat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-8">
          <div>
            <p className="text-justify text-white">
              "I strongly recommend Nature Concept and Allied Services Company for all gardening and landscaping services. They are truly passionate about what they do. The view of our Lawn speaks volume to their professionalism"
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Kenny Olayinka
            </p>
          </div>
        </div>
        <div className="neat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "Nature Concept & Allied services Company gave our garden so much life. Their expertise and creativity are top-notch"
            </p>
            <p className="mt-4 text-center font-semibold text-white">
             Simbo Odugbemi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
