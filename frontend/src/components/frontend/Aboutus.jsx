// import React from "react";
// import AboutImg from "../../assets/images/about-us.jpg";

// const Aboutus = () => {
//   return (
//     <div className="my-10">
//     <div className="commonContainer flex flex-col lg:flex-row items-center gap-10 py-16 px-6">
//       {/* Image Section */}
//       <div className="relative w-full lg:w-1/2 flex-shrink-0 ">
//         <img
//           src={AboutImg}
//           alt="About Us"
//           className="object-cover w-full h-80 lg:h-full rounded-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-3xl pointer-events-none"></div>
//       </div>

//       {/* Text Section */}
//       <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-6">
//         <p className="text-highlightColor text-4xl font-bold tracking-wider mb-2">
//           About Us
//         </p>
//         <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
//           Craft a Structure that Lasts a Lifetime
//         </h2>
//         <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
//           We believe in creating structures that stand the test of time, blending
//           quality materials with expert craftsmanship to ensure longevity and reliability.
//           Our approach is rooted in precision and attention to every detail.
//         </p>
//         <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-2">
//           From concept to completion, we focus on delivering excellence in every
//           project. Our team of skilled professionals works tirelessly to bring
//           your vision to life, constructing spaces that are both functional and inspiring.
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Aboutus;

// import React from "react";
// import { FaArrowRight } from "react-icons/fa"; // Example icon
// import AboutImg from "../../assets/images/about-us.jpg";

// const AboutUs = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12">

//         {/* Image Section */}
//         <div className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out hover:rotate-3">
//           <img
//             src={AboutImg}
//             alt="About Us"
//             className="object-cover w-full h-80 lg:h-full transform hover:scale-110 transition-all duration-300 ease-in-out"
//           />
//           <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent opacity-0 hover:opacity-60 transition-all duration-300" />
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
//             <span className="text-white text-4xl font-bold">Explore More</span>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="flex flex-col justify-center space-y-8 opacity-0 animate-fadeIn">
//           <p className="text-highlightColor text-4xl font-extrabold uppercase tracking-wider">
//             About Us
//           </p>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
//             We Build What Lasts
//           </h2>
//           <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//             With a passion for craftsmanship and attention to detail, we create structures designed to endure. Quality materials, precise construction, and a dedication to excellence ensure that every project we complete stands the test of time.
//           </p>
//           <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//             Our team of experts is committed to turning your ideas into reality, building spaces that are not only functional but inspiring. Let's bring your vision to life.
//           </p>

//           {/* Primary Button with Icon */}
//           <div>
//             <button className="relative mt-8 inline-flex items-center px-8 py-3 bg-highlightColor text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
//               <span>Discover More</span>
//               <FaArrowRight className="w-5 h-5 ml-3 transition-all duration-300 transform group-hover:translate-x-2" />
//               {/* Hover Animation */}
//               <span className="absolute inset-0 bg-white bg-opacity-10 rounded-full group-hover:scale-110 transition-all duration-300 transform"></span>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUs;

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
