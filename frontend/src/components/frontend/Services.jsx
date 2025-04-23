// import React, { useEffect, useState } from "react";
// import Button from "./Button";
// import img1 from "../../assets/images/construction7.jpg";
// import img2 from "../../assets/images/GeneralContract.png";
// import img3 from "../../assets/images/construction42.jpg";
// import img4 from "../../assets/images/building-contracting.jpg";
// import { apiUrl, imageUrl } from "../common/http";
// import { Link } from "react-router-dom";

// const ourServices = [
//   {
//     title: "Residential Construction",
//     desc: "Building high-quality homes tailored to modern needs, focusing on durability, aesthetics, and comfort.",
//     img: img1,
//   },
//   {
//     title: "General Contracting",
//     desc: "Managing all aspects of construction projects with attention to detail and efficient resource management.",
//     img: img2,
//   },
//   {
//     title: "Infrastructure & Civil Engineering",
//     desc: "Developing reliable infrastructure solutions, including roads, bridges, and public utilities for sustainable growth.",
//     img: img3,
//   },
//   {
//     title: "Project Planning & Design",
//     desc: "Comprehensive project planning and design services, ensuring seamless execution from concept to completion.",
//     img: img4,
//   },
// ];

// const Services = () => {
//   const [latestServices, setlatestServices] = useState([]);

//   const fetchService = async () => {
//     const res = await fetch(apiUrl + "latest-service?limit=3", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     const result = await res.json();
//     if (result.status) {
//       setlatestServices(result.data);
//     } else {
//       console.log("false");
//     }
//     // console.log(result);
//   };

//   useEffect(() => {
//     // console.log("fetchservice")
//     fetchService();
//   }, []);

//   return (
//     // <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-yellow-50 py-10 flex flex-col items-center justify-center ">
//     <div className=" py-10 flex flex-col items-center justify-center ">
//       <div className="flex flex-col items-center justify-center commonContainer">
//         <h1 className="font-semibold text-highlightColor text-xl">
//           Our Services
//         </h1>
//         <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
//           Tailored Construction Solutions
//         </p>
//         <p className="text-sm text-textColor text-center max-w-2xl">
//           Offering expert residential, commercial, and industrial construction
//           services designed with quality and precision to meet diverse project
//           needs.
//         </p>
//       </div>

//       <div className="py-10 w-full flex flex-wrap justify-center">
//         {latestServices.map((item, index) => (
//           <div
//             key={index}
//             className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
//           >
//             <img src={imageUrl+item.image} className="w-full h-full object-cover" alt="" />
//             <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:from-black/90 transition-color duration-700 delay-100 top-0 right-0"></div>
//             <div className=" overflow-hidden absolute w-full h-full bottom-0 right-0 p-5 translate-y-[9rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
//               <h1 className="text-white font-bold text-xl mb-4">
//                 {item.title}
//               </h1>
//               <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p className="mb-5 ">{item.short_desc}</p>
//                 <div>
//                   <Button
//                     className="bg-highlightColor text-white"
//                     title="Read More"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-center ">
//         <Link to="/services">
//           <Button
//             title={"View all services"}
//             className={"bg-highlightColor text-white"}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Services;

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
  // {
  //   title: "Planning & Design",
  //   desc: "From idea to blueprint, we plan and design every stage with precision and vision.",
  //   img: img4,
  //   icon: <FaDraftingCompass />,
  // },
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

  const displayedServices =
    latestServices.length > 0 ? latestServices : ourServices;

  const iconMap = [
    <FaHardHat className="text-2xl text-highlightColor" />,
    <FaWrench className="text-2xl text-highlightColor" />,
    <FaBuilding className="text-2xl text-highlightColor" />,
    <FaDraftingCompass className="text-2xl text-highlightColor" />,
  ];

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
        {displayedServices.map((item, index) => (
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
                <p className="mb-5">
                  <WordCountEllipsis shortDesc={item.short_desc || item.desc} maxWords={8} />
                </p>
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
          <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-highlightColor hover:text-highlightColor hover:bg-white transition-all duration-300">
            View all services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
