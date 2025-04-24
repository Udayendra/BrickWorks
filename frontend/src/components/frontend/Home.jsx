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
