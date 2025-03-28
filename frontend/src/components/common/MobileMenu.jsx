import React, { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const [isActive, setisActive] = useState("/");

  useEffect(() => {
    setisActive(location.pathname);
  }, [location]);

  const menuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div>
        {isOpen ? (
          <LuX size={30} onClick={menuBar} />
        ) : (
          <LuMenu size={30} onClick={menuBar} />
        )}
      </div>
      <div
        className={`absolute top-20 right-0 w-full bg-transparent my-5 overflow-hidden transition duration-300 delay-75 ${
          isOpen ? "opacity-1" : "opacity-0"
        }  `}
      >
        <div
          className={` backdrop-blur-md bg-white border border-secondaryColor rounded-lg  mx-20 transition-transform duration-300 delay-75 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } `}
        >
          <ul className="flex flex-col items-center justify-center gap-y-5 text-lg py-5 ">
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className={`hover:text-highlightColor relative font-semibold ${
                  isActive === link.path
                    ? "text-highlightColor"
                    : "text-textColor"
                }`}
              >
                <Link to={link.path}>{link.nav}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
