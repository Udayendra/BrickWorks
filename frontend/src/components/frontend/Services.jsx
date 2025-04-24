import React, { useEffect, useState } from "react";
import Button from "./Button";
import img1 from "../../assets/images/construction7.jpg";
import img2 from "../../assets/images/GeneralContract.png";
import img3 from "../../assets/images/construction42.jpg";
import img4 from "../../assets/images/building-contracting.jpg";
import { apiUrl, imageUrl } from "../common/http";
import { Link } from "react-router-dom";
import {
  FaTools,
  FaHardHat,
  FaDraftingCompass,
  FaBuilding,
  FaWrench,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import WordCountEllipsis from "../common/WordCountEllipsis";

const ourServices = [
  {
    title: "Residential Construction",
    desc: "Delivering expertly built homes with lasting quality, comfort, and attention to detail.",
    img: img1,
    icon: <FaBuilding />,
  },
  {
    title: "General Contracting",
    desc: "Efficiently managing projects with trusted expertise, resource planning, and execution.",
    img: img2,
    icon: <FaHardHat />,
  },
  {
    title: "Infrastructure & Civil",
    desc: "Reliable infrastructure solutions from roads to utilities.",
    img: img3,
    icon: <FaTools />,
  },
];

const Services = () => {
  const [latestServices, setLatestServices] = useState([]);

  const fetchService = async () => {
    try {
      const res = await fetch(apiUrl + "latest-service?limit=3", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await res.json();
      if (result.status) {
        setLatestServices(result.data);
      }
    } catch (err) {
      console.warn("Failed to fetch services:", err);
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  // const displayedServices =
  //   latestServices.length > 0 ? latestServices : ourServices;



  return (
    <div className="commonContainer py-20">
      <div className="text-center mb-20 space-y-3">
        <h2 className="text-highlightColor text-xl font-semibold">
          Our Services
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-textColor mb-2">
          Strong Foundations, Smart Solutions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From planning to execution, we build with precision. Explore our core
          construction services tailored to quality and durability.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestServices.map((item, index) => (
          <div
            key={index}
            className="relative w-[22rem] h-[28rem] rounded-2xl overflow-hidden group border-2 border-gray-400 hover:border-highlightColor transition-all duration-200"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:opacity-0 transition-opacity duration-700 delay-100 top-0 right-0"></div>
            <div className=" absolute top-[28rem] left-[8rem] w-[100px] h-[100px] rounded-full bg-highlightColor group-hover:top-[13rem] group-hover:w-[800px] group-hover:h-[800px] group-hover:-left-60 group-hover:rounded-full transition-all duration-500 ease-in-out"></div>
            <div className="absolute overflow-hidden  w-full h-full bottom-0 right-0 p-5 translate-y-[8rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
              <h1 className="text-white font-bold text-xl mb-4">
                {item.title}
              </h1>
              <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 ">
                <div className="mb-5">
                  <WordCountEllipsis shortDesc={item.short_desc || item.desc} maxWords={8} />
                </div>
                <button className="flex items-center justify-center text-white text-lg font-semibold  transition-all duration-300 group/btn space-x-2 border-2 border-white py-2 px-4 rounded-full hover:text-highlightColor hover:bg-white">
                  <div>Read more</div>
                  <FaArrowRightLong className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Link to="/services">
          <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-highlightColor hover:text-highlightColor hover:bg-transparent transition-all duration-300">
            View all services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
