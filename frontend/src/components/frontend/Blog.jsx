import React from "react";
import Button from "./Button";
import img1 from "../../assets/images/construction9.jpg";
import img2 from "../../assets/images/construction4.jpg";
import img3 from "../../assets/images/engineer-4925135_1280.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

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
      "Learn about the essential safety practices that protect workers...",
    //  and equipment on construction sites.
    img: img3,
    link: "#",
    category: "Safety",
  },
];

function TruncateText(text, maxLength) {
  const truncateText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return truncateText;
}

const Blog = () => {
  return (
    <div className=" py-10">
      {/* <div className="bg-accentColor/20 py-10"> */}
      <div className="flex flex-col items-center justify-center commonContainer">
        <h1 className="font-semibold text-highlightColor text-xl">
          Why Choose Us?
        </h1>
        <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
          Excellence in Construction Services
        </p>
        <p className="text-sm text-textColor text-center max-w-2xl">
          Committed to quality and innovation, we deliver tailored construction
          solutions that exceed expectations.
        </p>
      </div>
      <div className="commonContainer flex flex-wrap items-center justify-center gap-5">
        {blogData.map((data, index) => (
          <div
            key={index}
            className="max-w-[20rem] flex flex-col justify-between border-2 bg-white border-gray-400 rounded-2xl shadow-custom-light h-full hover:border-highlightColor transition-colors duration-300 "
          >
            <a href="#">
              <div className="w-full aspect-w-16 aspect-h-9">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={data.img}
                  alt=""
                />
              </div>
            </a>
            <div className="p-5 flex flex-col items-start justify-between flex-grow ">
              <p className="mb-3 font-normal text-gray-700 ">
                {TruncateText(data.description, 55)}
              </p>
              <button className="flex items-center justify-center text-highlightColor text-lg font-semibold transition-all duration-300 group/btn space-x-2 border-2 border-highlightColor py-2 px-4 rounded-full hover:bg-highlightColor hover:text-white">
                <div>Read more</div>
                <FaArrowRightLong className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-5">
        <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-highlightColor hover:text-highlightColor hover:bg-white transition-all duration-300">
          View all blogs
        </button>
      </div>
    </div>
  );
};

export default Blog;
