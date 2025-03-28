import React, { useEffect, useState } from "react";
import Button from "./Button";
import img1 from "../../assets/images/construction7.jpg";
import img2 from "../../assets/images/GeneralContract.png";
import img3 from "../../assets/images/construction42.jpg";
import img4 from "../../assets/images/building-contracting.jpg";
import { apiUrl, imageUrl } from "../common/http";
import { Link } from "react-router-dom";

const ourServices = [
  {
    title: "Residential Construction",
    desc: "Building high-quality homes tailored to modern needs, focusing on durability, aesthetics, and comfort.",
    img: img1,
  },
  {
    title: "General Contracting",
    desc: "Managing all aspects of construction projects with attention to detail and efficient resource management.",
    img: img2,
  },
  {
    title: "Infrastructure & Civil Engineering",
    desc: "Developing reliable infrastructure solutions, including roads, bridges, and public utilities for sustainable growth.",
    img: img3,
  },
  {
    title: "Project Planning & Design",
    desc: "Comprehensive project planning and design services, ensuring seamless execution from concept to completion.",
    img: img4,
  },
];

const Services = () => {
  const [latestServices, setlatestServices] = useState([]);

  const fetchService = async () => {
    const res = await fetch(apiUrl + "latest-service?limit=3", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    if (result.status) {
      setlatestServices(result.data);
    } else {
      console.log("false");
    }
    // console.log(result);
  };

  useEffect(() => {
    // console.log("fetchservice")
    fetchService();
  }, []);

  return (
    <div className="bg-accentColor/20 py-10 flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center commonContainer">
        <h1 className="font-semibold text-highlightColor text-xl">
          Our Services
        </h1>
        <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
          Tailored Construction Solutions
        </p>
        <p className="text-sm text-textColor text-center max-w-2xl">
          Offering expert residential, commercial, and industrial construction
          services designed with quality and precision to meet diverse project
          needs.
        </p>
      </div>

      <div className="py-10 w-full flex flex-wrap justify-center">
        {latestServices.map((item, index) => (
          <div
            key={index}
            className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
          >
            <img src={imageUrl+item.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:from-black/90 transition-color duration-700 delay-100 top-0 right-0"></div>
            <div className=" overflow-hidden absolute w-full h-full bottom-0 right-0 p-5 translate-y-[9rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
              <h1 className="text-white font-bold text-xl mb-4">
                {item.title}
              </h1>
              <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="mb-5 ">{item.short_desc}</p>
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
        <Link to="/services">
          <Button
            title={"View all services"}
            className={"bg-highlightColor text-white"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Services;
