import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AboutImg from "../../assets/images/about-us.jpg"; // You can change this to your image

const AboutUs = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex">
      {/* Decorative Circle */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-highlightColor/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative group">
          <img
            src={AboutImg}
            alt="About"
            className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 ease-out"
          />
          {/* Floating Label */}
          <div className="absolute border border-highlightColor -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 bg-white rounded-full shadow-md text-highlightColor text-sm font-medium uppercase tracking-wide transform group-hover:-rotate-6 transition-transform duration-300 ease-out">
            Excellence in Craft
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col space-y-8 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
            We Don't Just Build,
            <span className="text-highlightColor"> We Engineer Dreams.</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {/* At our core, we’re creators. From architecture to final structure,
            our commitment is to excellence and innovation. Every detail matters. */}
            Our mission is to blend durability with design, crafting
            construction that not only stands tall but also inspires.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience the difference of working with a team that blends
            creativity with precision. Together, we bring visions to life.
          </p>

          {/* <h2 className="text-4xl font-bold text-gray-900">
            Creating Timeless <span className="text-highlightColor">Structures</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to blend durability with design, crafting construction
            that not only stands tall but also inspires. We value aesthetics,
            functionality, and future-proof innovation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every blueprint is a promise, every detail a commitment. Experience
            precision architecture backed by passion.
          </p> */}

          <button className="group w-fit inline-flex items-center gap-3 bg-highlightColor text-white px-8 py-3 rounded-full font-semibold text-lg border-2 border-highlightColor hover:text-highlightColor hover:bg-transparent transition-all duration-300">
            <span>Explore More</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
