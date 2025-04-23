// import React from "react";
// import Button from "./Button";
// import img1 from "../../assets/images/construction4.jpg";
// import img2 from "../../assets/images/commercial-building.jpg";
// import img3 from "../../assets/images/highway.jpeg";
// import img4 from "../../assets/images/hotel.jpg";

// const ourProjects = [
//   {
//     title: "Urban Residential Complex",
//     desc: "A modern residential complex featuring sustainable design, open spaces, and premium amenities tailored for urban living.",
//     img: img1,
//   },
//   {
//     title: "Commercial Office Building",
//     desc: "A high-rise commercial space built with advanced energy-efficient systems and cutting-edge architectural designs.",
//     img: img2,
//   },
//   {
//     title: "Highway and Bridge Construction",
//     desc: "Infrastructure project focused on creating durable and reliable transportation networks with high safety standards.",
//     img: img3,
//   },
//   {
//     title: "Luxury Hotel and Resort",
//     desc: "A luxury resort project featuring high-end amenities, scenic views, and sustainable architecture for an exceptional guest experience.",
//     img: img4,
//   },
// ];

// const Projects = () => {
//   return (
//     <div className=" py-10 flex flex-col items-center justify-center ">
//     {/* <div className="bg-accentColor/20 py-10 flex flex-col items-center justify-center "> */}
//       <div className="flex flex-col items-center justify-center commonContainer">
//         <h1 className="font-semibold text-highlightColor text-xl">
//           Our Projects
//         </h1>
//         <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center capitalize">
//           Explore Our Diverse Range of Projects
//         </p>
//         <p className="text-sm text-textColor text-center max-w-2xl">
//           We specialize in a variety of successful residential, commercial, and
//           industrial projects, each executed with a commitment to quality and
//           expertise.
//         </p>
//       </div>

//       <div className="py-10 w-full flex flex-wrap justify-center">
//         {ourProjects.map((item, index) => (
//           <div
//             key={index}
//             className="w-[22rem] h-[28rem] rounded-xl m-3 relative overflow-hidden group"
//           >
//             <img src={item.img} className="w-full h-full object-cover" alt="" />
//             <div className="absolute w-full h-full  bg-gradient-to-t from-black/60 group-hover:from-black/90 transition-color duration-700 delay-100 top-0 right-0"></div>
//             <div className=" overflow-hidden absolute w-full h-full bottom-0 right-0 p-5 translate-y-[9rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white ">
//               <h1 className="text-white font-bold text-xl mb-4">
//                 {item.title}
//               </h1>
//               <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p className="mb-5 ">{item.desc}</p>
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
//         <Button title={'View All Projects'} className={'bg-highlightColor text-white'} />
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from "react";
import img1 from "../../assets/images/construction4.jpg";
import img2 from "../../assets/images/commercial-building.jpg";
import img3 from "../../assets/images/highway.jpeg";
import img4 from "../../assets/images/hotel.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import WordCountEllipsis from "../common/WordCountEllipsis";

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
  // {
  //   title: "Luxury Hotel and Resort",
  //   desc: "A luxury resort project featuring high-end amenities, scenic views, and sustainable architecture for an exceptional guest experience.",
  //   img: img4,
  // },
];

const Projects = () => {
  return (
    <div className="commonContainer py-20">
      <div className="text-center mb-20 space-y-3">
        <h2 className="text-highlightColor text-xl font-semibold">
          Our Projects
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-textColor mb-2">
          Explore Our Diverse Range of Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We specialize in residential, commercial, and infrastructure projects with unmatched precision and attention to quality.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourProjects.map((item, index) => (
          <div
            key={index}
            className="relative w-[22rem] h-[28rem] rounded-2xl overflow-hidden group border-2 border-gray-400 hover:border-highlightColor transition-all duration-200"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-gradient-to-t from-black/60 group-hover:opacity-0 transition-opacity duration-700 delay-100 top-0 right-0"></div>
            <div className="absolute top-[28rem] left-[8rem] w-[100px] h-[100px] rounded-full bg-highlightColor group-hover:top-[13rem] group-hover:w-[800px] group-hover:h-[800px] group-hover:-left-60 group-hover:rounded-full transition-all duration-500 ease-in-out"></div>
            <div className="absolute overflow-hidden w-full h-full bottom-0 right-0 p-5 translate-y-[8rem] group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end text-white">
              <h1 className="text-white font-bold text-xl mb-4">
                {item.title}
              </h1>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                <p className="mb-5"> <WordCountEllipsis shortDesc={item.desc || item.short_desc} maxWords={8} /> </p>
                <button className="flex items-center justify-center text-white text-lg font-semibold transition-all duration-300 group/btn space-x-2 border-2 border-white py-2 px-4 rounded-full hover:text-highlightColor hover:bg-white">
                  <div>Read more</div>
                  <FaArrowRightLong className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-highlightColor hover:text-highlightColor hover:bg-white transition-all duration-300">
          View all projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
