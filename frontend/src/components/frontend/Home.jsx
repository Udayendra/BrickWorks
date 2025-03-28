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

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="bgImage h-[800px] w-full flex items-center justify-center">
        <div className=" h-[800px] w-full flex items-center justify-center bg-black/10">
          <div className="text-center text-white">
            <span className="text-[1.5rem] font-semibold text-highlightColor capitalize">
              Welcome to amazing constructions
            </span>
            <h1 className="text-[3rem] md:text-[4rem] font-bold leading-tight capitalize">
              Craft dreams with <br /> precision and excellence
            </h1>
            <p className="text-md font-semibold">
              we excel at transforming visions into reality throught outstanding
              craftmanship and precise <br />
              attention to details. With year of experience and dedication to
              quality,<br /> we ensure every project exceeds expectations.
            </p>
            <div className="flex items-center justify-center gap-5 my-5">
              <Button
                className={"bg-textColor text-lg"}
                title={"Contact Now"}
              />
              <Button
                className={"bg-highlightColor text-lg"}
                title={"View Projects"}
              />
            </div>
          </div>
        </div>
      </div>
      <Aboutus />
      <Services />
      <Chooseus />
      <Projects />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
