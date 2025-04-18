import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import img1 from "../../../assets/images/construction7.jpg";
import img2 from "../../../assets/images/GeneralContract.png";
import img3 from "../../../assets/images/construction42.jpg";
import img4 from "../../../assets/images/building-contracting.jpg";
import Button from "../Button";

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
  {
    title: "Eco-Friendly Housing Development",
    desc: "A sustainable housing project aimed at minimizing environmental impact with eco-friendly materials and designs.",
    img: img4,
  },
  {
    title: "Modern Shopping Center",
    desc: "An expansive shopping complex featuring popular retail outlets, food courts, and entertainment zones.",
    img: img4,
  },
  {
    title: "Seaside Apartments",
    desc: "Exclusive apartment buildings with scenic ocean views, high-end finishes, and private beach access.",
    img: img4,
  },
  {
    title: "Renewable Energy Plant",
    desc: "A facility dedicated to generating renewable energy from wind and solar sources, contributing to a cleaner environment.",
    img: img4,
  },
  {
    title: "Smart City Infrastructure",
    desc: "A project integrating smart technology into urban infrastructure for improved efficiency and quality of life.",
    img: img4,
  },
  {
    title: "Public Park and Recreation Center",
    desc: "An urban park with green spaces, walking trails, playgrounds, and a recreation center for community gatherings.",
    img: img4,
  },
  {
    title: "Medical Research Facility",
    desc: "A state-of-the-art facility designed for advanced medical research and treatment solutions.",
    img: img4,
  },
  {
    title: "University Campus Expansion",
    desc: "Expansion of a university campus with modern classrooms, laboratories, and residential buildings for students.",
    img: img4,
  },
  {
    title: "Industrial Warehouse Complex",
    desc: "A large warehouse complex with modern logistics and storage solutions for various industries.",
    img: img4,
  },
  {
    title: "Agricultural Innovation Hub",
    desc: "A research and development center focusing on innovative agricultural practices and sustainable farming.",
    img: img4,
  },
];

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="bgImage1 h-[700px] w-full flex items-center justify-center">
        <div className="h-[700px] w-full flex items-center justify-start bg-black/30">
          <div className="text-white commonContainer p-4 md:p-8">
            <span className="text-[1rem] md:text-[2rem] font-semibold text-highlightColor">
              Discover Our Latest Projects
            </span>
            <h1 className="text-[2rem] md:text-[3rem] font-bold leading-tight mt-2">
              Our Accomplished Work
            </h1>
            <p className="text-md font-semibold mt-4">
              At Amazing Constructions, we specialize in bringing ambitious
              visions to life. <br />
              Our diverse portfolio showcases a commitment to quality and
              innovation, with projects <br />
              that reflect our dedication to functional and aesthetic
              excellence. From modern <br />
              commercial spaces to personalized residential projects, each
              undertaking is handled <br />
              with the utmost care and precision. Let our work inspire your next
              big project!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accentColor/20 py-10 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center commonContainer">
          <h1 className="font-semibold text-highlightColor text-xl">
            Our Projects
          </h1>
          <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
            Building Dreams into Reality
          </p>
          <p className="text-sm text-textColor text-center max-w-2xl">
            Discover our work in residential, commercial, and industrial spaces.
            Each project reflects our commitment to quality, innovation, and the
            vision of our clients.
          </p>
        </div>

        {/*----------------- services ----------------- */}
        <div className="commonContainer py-10 w-full flex flex-wrap justify-center">
          {ourProjects.map((item, index) => (
            <div
              key={index}
              className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover"
                alt=""
              />
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
      </div>

      <Footer />
    </div>
  );
};

export default Project;
