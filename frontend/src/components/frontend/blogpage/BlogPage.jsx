import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import img1 from "../../../assets/images/construction7.jpg";
import img2 from "../../../assets/images/GeneralContract.png";
import img3 from "../../../assets/images/construction42.jpg";
import img4 from "../../../assets/images/building-contracting.jpg";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedBackground from "../AnimatedBackground";

const blogData = [
  {
    id: "1",
    title: "Top Construction Trends in 2024",
    description:
      "The benefits of modular constructions efficiency, flexibility and sustainability.",
    img: img1,
    link: "#",
    category: "Industry Trends",
  },
  {
    id: "2",
    title: "Eco-Friendly Building Materials You Should Know About",
    description: "Challenges and solutions in commercial construction projects",
    img: img2,
    link: "#",
    category: "Sustainability",
  },
  {
    id: "3",
    title: "How to Ensure Safety on Construction Sites",
    description:
      "Learn about the essential safety practices that protect workers and equipment on construction sites.",
    img: img3,
    link: "#",
    category: "Safety",
  },
  {
    id: "4",
    title: "The Future of Smart Buildings",
    description:
      "Explore how IoT and smart technology are revolutionizing modern buildings.",
    img: img4,
    link: "#",
    category: "Technology",
  },
  {
    id: "5",
    title: "Managing Construction Costs Effectively",
    description:
      "Tips and strategies for keeping your construction project within budget.",
    img: img4,
    link: "#",
    category: "Finance",
  },
  {
    id: "6",
    title: "Green Roofs and Their Benefits",
    description:
      "An in-depth look at green roofs and their advantages in urban construction.",
    img: img4,
    link: "#",
    category: "Sustainability",
  },
  {
    id: "7",
    title: "Preparing for Natural Disasters in Building Design",
    description:
      "Best practices for designing resilient buildings that withstand natural events.",
    img: img4,
    link: "#",
    category: "Safety",
  },
  {
    id: "8",
    title: "Understanding LEED Certification for Buildings",
    description:
      "Learn about the LEED certification process and its importance in sustainable design.",
    img: img4,
    link: "#",
    category: "Sustainability",
  },
  {
    id: "9",
    title: "Digital Twin Technology in Construction",
    description:
      "How digital twins are being used to optimize construction projects.",
    img: img4,
    link: "#",
    category: "Technology",
  },
  {
    id: "10",
    title: "Innovations in Prefabricated Structures",
    description:
      "Discover the latest trends in prefabrication for faster, efficient construction.",
    img: img4,
    link: "#",
    category: "Industry Trends",
  },
  {
    id: "11",
    title: "Building Information Modeling (BIM) Essentials",
    description:
      "A beginner’s guide to understanding BIM and its impact on construction.",
    img: img4,
    link: "#",
    category: "Technology",
  },
  {
    id: "12",
    title: "The Role of Drones in Modern Construction",
    description:
      "Exploring how drones are used to improve construction site efficiency and safety.",
    img: img4,
    link: "#",
    category: "Innovation",
  },
  {
    id: "13",
    title: "Sustainable Urban Development Practices",
    description:
      "Key practices that promote sustainable development in urban areas.",
    img: img4,
    link: "#",
    category: "Sustainability",
  },
];

function TruncateText(text, maxLength) {
  const truncateText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return truncateText;
}

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bgImage1 h-[700px] w-full flex items-center justify-center">
        <div className="h-[700px] w-full flex items-center justify-start bg-black/30">
          <div className="text-white commonContainer p-4 md:p-8">
            <span className="text-lg md:text-2xl font-semibold text-highlightColor">
              Stay Updated with Our Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
              Insights and Inspiration for Modern Construction
            </h1>
            <p className="text-md md:text-lg mt-4">
              Dive into our articles covering the latest trends, sustainable
              practices, safety tips, and more in the construction industry.
            </p>
          </div>
        </div>
      </div>

      <AnimatedBackground>
        <div className="py-10 flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center commonContainer">
            <h1 className="font-semibold text-highlightColor text-xl">
              Latest Articles
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-textColor mt-4">
              Insights and News in Construction
            </p>
            <p className="text-sm md:text-base text-textColor max-w-2xl mx-auto mt-2 text-center">
              Discover expert advice and the latest updates in construction
              innovation, sustainability, and more.
            </p>
          </div>
          {/*----------------- blogs ----------------- */}
          <div className="commonContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {blogData.map((data, index) => (
              <div
                key={index}
                className=" flex flex-col justify-between border-2 bg-white/50 border-gray-400 hover:border-highlightColor rounded-2xl shadow-custom-light h-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 "
              >
                <a href="#">
                  {/* <div className="w-full aspect-w-16 aspect-h-9"> */}
                  <img
                    className="w-full h-52 object-cover rounded-t-2xl"
                    src={data.img}
                    alt=""
                  />
                  {/* </div> */}
                </a>
                <div className="p-6 flex flex-col justify-between flex-grow ">
                  <p className="font-normal text-gray-600 mb-5 ">
                    {TruncateText(data.description, 55)}
                  </p>
                  <button className="flex items-center max-w-[10rem] justify-center text-highlightColor text-lg font-semibold transition-all duration-300 group/btn space-x-2 border-2 border-highlightColor py-2 px-4 rounded-full hover:bg-highlightColor hover:text-white">
                    <div>Read more</div>
                    <FaArrowRightLong className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
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

export default BlogPage;
