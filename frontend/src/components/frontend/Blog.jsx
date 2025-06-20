import React, { useEffect, useState } from "react";
import Button from "./Button";
import img1 from "../../assets/images/construction9.jpg";
import img2 from "../../assets/images/construction4.jpg";
import img3 from "../../assets/images/engineer-4925135_1280.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { apiUrl, imageUrl } from "../common/http";
import { ArticleSkeletonCard } from "../common/SkeletonLoader";

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
  const [latestArticle, setLatestArticle] = useState([]);

  const fetchArticle = async () => {
    try {
      const res = await fetch(apiUrl + "latest-article?limit=3", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await res.json();
      if (result.status) {
        setLatestArticle(result.data);
      } else {
        console.log("status false");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div className="py-10">
      {/* <div className="bg-accentColor/20 py-10"> */}
      <div className="flex flex-col items-center justify-center commonContainer">
        <h1 className="font-semibold text-highlightColor text-xl">Our Blog</h1>
        <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
          Thoughts & Updates from the Field
        </p>
        <p className="text-sm text-textColor text-center max-w-2xl">
          Explore industry insights, behind-the-scenes stories, and valuable
          knowledge from our construction journey.
        </p>
      </div>
      <div className="commonContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">



        {latestArticle.length === 0
          ? Array.from({ length: 3 }).map((_, index) => (
              <ArticleSkeletonCard key={index} />
            ))
          : latestArticle.map((data, index) => (
              <div
                key={index}
                className=" flex flex-col justify-between border-2 bg-white/50 border-gray-400 hover:border-highlightColor rounded-2xl shadow-custom-light h-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 "
              >
                <a href="#">
                  {/* <div className="w-full aspect-w-16 aspect-h-9"> */}
                  <img
                    className="w-full h-52 object-cover rounded-t-2xl"
                    src={imageUrl + "articles/" + data.image}
                    alt=""
                  />
                  {/* </div> */}
                </a>
                <div className="p-6 flex flex-col justify-between flex-grow ">
                  <p className="font-normal text-gray-600 mb-5 ">
                    {data.title}
                  </p>
                  <button className="flex items-center max-w-[10rem] justify-center text-highlightColor text-lg font-semibold transition-all duration-300 group/btn space-x-2 border-2 border-highlightColor py-2 px-4 rounded-full hover:bg-highlightColor hover:text-white">
                    <div>Read more</div>
                    <FaArrowRightLong className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
      </div>
      <div className="flex items-center justify-center pt-5">
        <button className="bg-highlightColor text-white text-lg px-8 py-3 rounded-full font-semibold border-2 border-highlightColor hover:text-highlightColor hover:bg-transparent transition-all duration-300">
          View All Blogs
        </button>
      </div>
    </div>
  );
};

export default Blog;
