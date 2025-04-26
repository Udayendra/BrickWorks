import React, { useContext, useEffect, useState } from "react";

import {
  FaHardHat,
  FaWrench,
  FaDraftingCompass,
  FaNewspaper,
  FaArrowRight,
} from "react-icons/fa";
import { AuthContext } from "./context/Auth";
import { Link, useLocation } from "react-router-dom";

const sideLinks = [
  {
    linkName: "Dashboard",
    link: "/admin/dashboard",
    icon: <FaHardHat />,
  },
  {
    linkName: "Services",
    link: "/admin/show",
    icon: <FaWrench />,
  },
  {
    linkName: "Projects",
    link: "/admin/projects",
    icon: <FaDraftingCompass />,
  },
  {
    linkName: "Articles",
    link: "/admin/article",
    icon: <FaNewspaper />,
  },
];

export const SideBar = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const [isActive, setisActive] = useState("");
  // const [isActive, setisActive] = useState("/admin/dashboard");
  useEffect(() => {
    setisActive(location.pathname);
  }, [location]);

  return (
    <>
      <div className="w-64 flex flex-col justify-between shadow-lg shadow-gray-500/50 pb-5">
        <div className="">
          <div className="font-bold text-2xl text-textColor my-5 w-full text-center ">
            <a href="/">
              <span className="text-highlightColor">Brick</span>Works
            </a>
          </div>
          <ul className="flex flex-col gap-2 font-semibold text-textColor mt-10">
            {sideLinks.map((item, index) => (
              <li key={index} className="w-full">
                <Link
                  to={item.link}
                  className={`relative flex items-center w-full py-3 pl-8 text-lg group hover:bg-gray-200 transition-all duration-300 ${
                    isActive == item.link ? "bg-gray-200" : ""
                  } `}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-highlightColor opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                  {isActive == item.link ? (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-highlightColor transition-all duration-300"></span>
                  ) : (
                    ""
                  )}
                  <span className="mr-3 text-highlightColor">{item.icon}</span>

                  {item.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={logout}
          className="group relative inline-flex items-center justify-center font-semibold w-full text-xl text-center text-highlightColor pt-3 pb-4 cursor-pointer hover:bg-highlightColor hover:text-white transition-colors duration-200"
        ><span className="w-5 h-5 bg-white absolute left-0 -bottom-4 group-hover:bg-highlightColor  transition-colors duration-200"></span>
          <span className="mr-[5px]">Logout</span>
          {/* <FiLogOut />{" "} */}
          <span className="relative">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 H8 Q6 3 6 5 V19 Q6 21 8 21 H12" />
            </svg>
            <FaArrowRight
              size={14}
              className="absolute top-[5px] left-[10px] group-hover:translate-x-[6px] transition-transform duration-300"
            />
          </span>
        </button>
      </div>
    </>
  );
};
