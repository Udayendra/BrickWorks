import React from "react";
import Navbar from "../../common/Navbar";
import Aboutus from "../../frontend/Aboutus";
import Footer from "../../common/Footer";
import Team from "./Team";


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bgImage1 h-[700px] w-full flex items-center justify-center">
        <div className=" h-[700px] w-full flex items-center justify-start bg-black/20">
          <div className=" text-white commonContainer p-4 md:p-8">
            <span className="text-[1rem] md:text-[2rem] font-semibold text-highlightColor">
              Welcome to Your Trusted Builders
            </span>
            <h1 className="text-[2rem] md:text-[3rem] font-bold leading-tight mt-2">
              Building a Better Future,
              <br /> One Project at a Time
            </h1>
            <p className="text-md font-semibold mt-4">
              At Amazing Constructions, we believe in delivering exceptional
              quality and innovative solutions. <br /> Our team is dedicated to
              transforming your ideas into reality with meticulous <br />
              attention to detail and unparalleled craftsmanship. Experience the{" "}
              <br />
              difference with us, where your vision becomes our mission!
            </p>
          </div>
        </div>
      </div>
      <Aboutus />
      <div className="bg-gray-100 py-10">
        <Team/>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
