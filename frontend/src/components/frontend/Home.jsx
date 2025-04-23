import React from "react";
import Navbar from "../common/Navbar";
import Button from "./Button";
import Aboutus from "./Aboutus";
import Footer from "../common/Footer";
import Services from "./Services";
import Projects from "./Projects";
import Chooseus from "./Chooseus";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import AnimatedBackground from "./AnimatedBackground";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="bgImage h-[800px] w-full flex items-center justify-center">
        <div className=" h-[800px] w-full flex items-center justify-center bg-black/10">
          <div className="text-center text-white">
            <span className="text-[2rem] text-black font-bold flex items-center justify-center text-center capitalize overflow-hidden ">
              Welcome to{" "}
              <span className="font-extrabold text-transparent bg-clip-text text-[2.25rem] bg-gradient-to-r from-violet-600 via-red-600 to-yellow-600 animate-gradient rounded-full px-4">
                {/* <div className="absolute" >Brickworks</div> */}
                Brickworks
              </span>{" "}
              constructions
            </span>
            <h1 className="text-[3rem] md:text-[4rem] font-bold leading-tight capitalize drop-shadow-md">
              Building Strong Foundations, <br className="hidden md:block" />
              Shaping Tomorrow's Skylines
            </h1>
            <p className="text-lg font-semibold drop-shadow-md">
              we specialize in creating durable, high-quality structures that
              stand the test of time. <br />
              we bring your construction projects to life from concept to
              completion.
              <br /> Let's build the future together.
            </p>
            {/* <div className="flex items-center justify-center gap-5 my-5">
              <Button
                className={"bg-textColor text-lg"}
                title={"Contact Now"}
              />
              <Button
                className={"bg-highlightColor text-lg"}
                title={"View Projects"}
              />
            </div> */}
            <div className="flex items-center justify-center gap-5 my-5">
              <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-highlightColor hover:text-highlightColor hover:bg-white/70 hover:backdrop-blur-lg transition-all duration-300">
                Get In Touch
              </button>
              <button className="bg-textColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-textColor hover:text-textColor hover:bg-white/70 hover:backdrop-blur-lg transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatedBackground>
        <Aboutus />
        <Services />
        <Chooseus />
        <Projects />
        <Testimonial />
        <Blog />
      </AnimatedBackground>
      <Footer />
    </div>
  );
};

export default Home;

// import React from "react";
// import Navbar from "../common/Navbar";
// import Aboutus from "./Aboutus";
// import Services from "./Services";
// import Projects from "./Projects";
// import Chooseus from "./Chooseus";
// import Testimonial from "./Testimonial";
// import Blog from "./Blog";
// import BentoBoxLayout from "./BentoBoxLayout";
// import Footer from "../common/Footer";

// const Home = () => {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-100 via-white to-gray-50">

//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative w-full h-[800px] bg-cover bg-center bg-no-repeat bgImage">
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-xl z-10"></div>
//         <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
//           <span className="text-[1.5rem] inline-block font-semibold text-highlightColor capitalize backdrop-blur-sm drop-shadow-xl px-3 py-1 rounded-md bg-gradient-to-r from-white/50 via-white/30 to-white/50">
//             Welcome to Brickworks
//           </span>
//           <h1 className="mt-4 text-[3rem] md:text-[4.5rem] font-extrabold leading-tight tracking-tight drop-shadow-xl">
//             Building Strong Foundations, <br className="hidden md:block" />
//             Shaping Tomorrow’s Skylines
//           </h1>
//           <p className="mt-6 text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
//             At Brickworks, we specialize in creating durable, high-quality structures that stand the test of time. With expert craftsmanship and attention to detail, we bring your construction projects to life—from concept to completion. Let’s build the future together.
//           </p>
//           <div className="flex items-center justify-center gap-5 my-5">
//             <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
//               Get In Touch
//             </button>
//             <button className="bg-white text-highlightColor text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
//               View Projects
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <Aboutus />

//       {/* Services Section */}
//       <Services />

//       {/* Why Choose Us Section */}
//       <Chooseus />

//       {/* Projects Section */}
//       <Projects />

//       {/* Testimonial Section */}
//       <Testimonial />

//       {/* Blog Section */}
//       <Blog />

//       {/* Bento Box Layout Section */}
//       <BentoBoxLayout />

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;
