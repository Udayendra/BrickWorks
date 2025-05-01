import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import img1 from "../../../assets/images/construction7.jpg";
import img2 from "../../../assets/images/GeneralContract.png";
import img3 from "../../../assets/images/construction42.jpg";
import img4 from "../../../assets/images/building-contracting.jpg";
import Button from "../Button";
import { apiUrl, projectImageUrl } from "../../common/http";
import WordCountEllipsis from "../../common/WordCountEllipsis";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedBackground from "../AnimatedBackground";

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
  const [viewProject, setViewProject] = useState([]);

  const fetchProject = async () => {
    try {
      const res = await fetch(apiUrl + "view-project", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await res.json();
      if (result.status) {
        setViewProject(result.data);
      } else {
        console.log("status false");
      }
      // console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);

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

      <AnimatedBackground>
        <div className="bg-accentColr/20 py-10 flex flex-col items-center min-h-screen justify-center ">
          <div className="text-center mb-20 space-y-3">
            <h2 className="text-highlightColor text-xl font-semibold">
              Our Projects
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-textColor mb-2">
              Explore Our Diverse Range of Projects
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in residential, commercial, and infrastructure
              projects with unmatched precision and attention to quality.
            </p>
          </div>

          {/*----------------- projects ----------------- */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {viewProject.map((project, index) => (
              <div
                key={index}
                className="relative w-[22rem] h-[28rem] rounded-2xl overflow-hidden group border-2 border-gray-400 hover:border-highlightColor transition-all duration-200"
              >
                <img
                  src={projectImageUrl + project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full bg-gradient-to-t from-black/60 group-hover:opacity-0 transition-opacity duration-700 delay-100 top-0 right-0"></div>
                <div className="absolute top-[28rem] left-[8rem] w-[100px] h-[100px] rounded-full bg-highlightColor group-hover:top-[13rem] group-hover:w-[800px] group-hover:h-[800px] group-hover:-left-60 group-hover:rounded-full transition-all duration-500 ease-in-out"></div>
                <div className="absolute overflow-hidden w-full h-full bottom-0 right-0 p-5 translate-y-[8rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white">
                  <h1 className="text-white font-bold text-xl mb-4">
                    {project.title}
                  </h1>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <div className="mb-5">
                      {" "}
                      <WordCountEllipsis
                        shortDesc={project.desc || project.short_desc}
                        maxWords={8}
                      />{" "}
                    </div>
                    <button className="flex items-center justify-center text-white text-lg font-semibold transition-all duration-300 group/btn space-x-2 border-2 border-white py-2 px-4 rounded-full hover:text-highlightColor hover:bg-white">
                      <div>Read more</div>
                      <FaArrowRightLong className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      <Footer />
    </div>
  );
};

export default Project;
