import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const Aboutus = () => {
  return (
    <div className="my-10">
    <div className="commonContainer flex flex-col lg:flex-row items-center gap-10 py-16 px-6">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex-shrink-0 ">
        <img
          src={AboutImg}
          alt="About Us"
          className="object-cover w-full h-80 lg:h-full rounded-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-3xl pointer-events-none"></div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-6">
        <p className="text-highlightColor text-4xl font-bold tracking-wider mb-2">
          About Us
        </p>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
          Craft a Structure that Lasts a Lifetime
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          We believe in creating structures that stand the test of time, blending
          quality materials with expert craftsmanship to ensure longevity and reliability.
          Our approach is rooted in precision and attention to every detail.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-2">
          From concept to completion, we focus on delivering excellence in every
          project. Our team of skilled professionals works tirelessly to bring
          your vision to life, constructing spaces that are both functional and inspiring.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;
