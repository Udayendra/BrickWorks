import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import img1 from "../../../assets/images/construction7.jpg";
import img2 from "../../../assets/images/GeneralContract.png";
import img3 from "../../../assets/images/construction42.jpg";
import img4 from "../../../assets/images/building-contracting.jpg";
import Button from "../Button";
import { apiUrl, imageUrl } from "../../common/http";

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
  {
    title: "Renovations & Remodeling",
    desc: "Transforming existing spaces with expert renovations, enhancing functionality while maintaining the original charm.",
    img: "img5",
  },
  {
    title: "Commercial Construction",
    desc: "Building commercial spaces that meet business needs, combining functionality and aesthetic appeal for success.",
    img: "img6",
  },
  {
    title: "Sustainable Building Solutions",
    desc: "Implementing eco-friendly practices and materials to create sustainable buildings that minimize environmental impact.",
    img: "img7",
  },
  {
    title: "Interior Design & Finishing",
    desc: "Crafting beautiful interior spaces with professional design and finishing services, tailored to your style and preferences.",
    img: "img8",
  },
  {
    title: "Maintenance & Repair Services",
    desc: "Offering ongoing maintenance and repair services to ensure your properties remain in top condition over time.",
    img: "img9",
  },
];

const ServicesPage = () => {
  const [viewServices, setViewServices] = useState([]);

  
  const fetchService = async () => {
    const res = await fetch(apiUrl + "view-service", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    if (result.status) {
      setViewServices(result.data);
    } else {
      console.log("false");
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bgImage1 h-[700px] w-full flex items-center justify-center">
        <div className="h-[700px] w-full flex items-center justify-start bg-black/20">
          <div className="text-white commonContainer p-4 md:p-8">
            <span className="text-[1rem] md:text-[2rem] font-semibold text-highlightColor">
              Welcome to Amazing Constructions
            </span>
            <h1 className="text-[2rem] md:text-[3rem] font-bold leading-tight mt-2">
              Our Comprehensive Services
            </h1>
            <p className="text-md font-semibold mt-4">
              At Amazing Constructions, we are committed to crafting spaces that
              inspire and endure. <br />
              With a focus on innovation and quality, our skilled team
              transforms visions into reality, <br />
              delivering tailored solutions that meet your unique needs. We
              pride ourselves on our <br />
              meticulous attention to detail, ensuring every project reflects
              our dedication to excellence. <br />
              Join us in creating spaces that are not only functional but also
              enhance the quality of life!
            </p>
          </div>
        </div>
      </div>

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
        {/*----------------- services ----------------- */}
        <div className="commonContainer py-10 w-full flex flex-wrap justify-center">
          {viewServices.map((item, index) => (
            <div
              key={index}
              className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
            >
              <img
                src={imageUrl + item.image}
                className="w-full h-full object-cover"
                alt=""
              />
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
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
