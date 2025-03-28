import React from "react";
import Button from "./Button";
import img1 from "../../assets/images/construction4.jpg";
import img2 from "../../assets/images/commercial-building.jpg";
import img3 from "../../assets/images/highway.jpeg";
import img4 from "../../assets/images/hotel.jpg";

const ourProjects = [
  {
    title: "Urban Residential Complex",
    desc: "A modern residential complex featuring sustainable design, open spaces, and premium amenities tailored for urban living.",
    img: img1,
  },
  {
    title: "Commercial Office Building",
    desc: "A high-rise commercial space built with advanced energy-efficient systems and cutting-edge architectural designs.",
    img: img2,
  },
  {
    title: "Highway and Bridge Construction",
    desc: "Infrastructure project focused on creating durable and reliable transportation networks with high safety standards.",
    img: img3,
  },
  {
    title: "Luxury Hotel and Resort",
    desc: "A luxury resort project featuring high-end amenities, scenic views, and sustainable architecture for an exceptional guest experience.",
    img: img4,
  },
];

const Projects = () => {
  return (
    <div className="bg-accentColor/20 py-10 flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center commonContainer">
        <h1 className="font-semibold text-highlightColor text-xl">
          Our Projects
        </h1>
        <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center capitalize">
          Explore Our Diverse Range of Projects
        </p>
        <p className="text-sm text-textColor text-center max-w-2xl">
          We specialize in a variety of successful residential, commercial, and
          industrial projects, each executed with a commitment to quality and
          expertise.
        </p>
      </div>

      <div className="py-10 w-full flex flex-wrap justify-center">
        {ourProjects.map((item, index) => (
          <div
            key={index}
            className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
          >
            <img src={item.img} className="w-full h-full object-cover" alt="" />
            <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:from-black/90 transition-color duration-700 delay-100 top-0 right-0"></div>
            <div className=" overflow-hidden absolute w-full h-full bottom-0 right-0 p-5 translate-y-[9rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
              <h1 className="text-white font-bold text-xl mb-4">
                {item.title}
              </h1>
              <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="mb-5 ">{item.desc}</p>
                <div>
                  <Button
                    className="bg-highlightColor text-white"
                    title="Read More"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <Button title={'View All Projects'} className={'bg-highlightColor text-white'} />
      </div>
    </div>
  );
};

export default Projects;
