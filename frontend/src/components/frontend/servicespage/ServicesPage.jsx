import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import img1 from "../../../assets/images/construction7.jpg";
import img2 from "../../../assets/images/GeneralContract.png";
import img3 from "../../../assets/images/construction42.jpg";
import img4 from "../../../assets/images/building-contracting.jpg";
import Button from "../Button";
import { apiUrl, serviceImageUrl } from "../../common/http";
import AnimatedBackground from "../AnimatedBackground";
import WordCountEllipsis from "../../common/WordCountEllipsis";
import { FaArrowRightLong } from "react-icons/fa6";

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

      <AnimatedBackground>
        <div className="bg-ccentColor/20 py-10 flex flex-col items-center min-h-screen justify-center ">
          <div className="text-center mb-20 space-y-3">
            <h2 className="text-highlightColor text-xl font-semibold">
              Our Services
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-textColor mb-2">
              Strong Foundations, Smart Solutions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From planning to execution, we build with precision. Explore our
              core construction services tailored to quality and durability.
            </p>
          </div>
          {/*----------------- services ----------------- */}
          {/* <div className="commonContainer py-10 w-full flex flex-wrap justify-center">
            {viewServices.map((service, index) => (
              <div
                key={index}
                className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
              >
                <img
                  src={serviceImageUrl + service.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:from-black/90 transition-color duration-700 delay-100 top-0 right-0"></div>
                <div className=" overflow-hidden absolute w-full h-full bottom-0 right-0 p-5 translate-y-[9rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
                  <h1 className="text-white font-bold text-xl mb-4">
                    {service.title}
                  </h1>
                  <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="mb-5 ">{service.short_desc}</p>
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
          </div> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {viewServices.map((service, index) => (
              <div
                key={index}
                className="relative w-[22rem] h-[28rem] rounded-2xl overflow-hidden group border-2 border-gray-400 hover:border-highlightColor transition-all duration-200"
              >
                <img
                  src={serviceImageUrl + service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:opacity-0 transition-opacity duration-700 delay-100 top-0 right-0"></div>
                <div className=" absolute top-[28rem] left-[8rem] w-[100px] h-[100px] rounded-full bg-highlightColor group-hover:top-[13rem] group-hover:w-[800px] group-hover:h-[800px] group-hover:-left-60 group-hover:rounded-full transition-all duration-500 ease-in-out"></div>
                <div className="absolute overflow-hidden  w-full h-full bottom-0 right-0 p-5 translate-y-[8rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
                  <h1 className="text-white font-bold text-xl mb-4">
                    {service.title}
                  </h1>
                  <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 ">
                    <div className="mb-5">
                      <WordCountEllipsis
                        shortDesc={service.short_desc || service.desc}
                        maxWords={8}
                      />
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
        </div>
      </AnimatedBackground>

      <Footer />
    </div>
  );
};

export default ServicesPage;
