import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";


const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isActive, setisActive] = useState("/");

  useEffect(() => {
    setisActive(location.pathname);
  }, [location]);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0  ${
        isSticky ? "w-[80%] left-[10%] rounded-full top-5" : "w-full"
      } transition-width duration-300 z-20 ${
        isHome && !isSticky ? "bg-transparent" : "bg-white/70 shadow-lg backdrop-blur-lg"
      } `}
    >
      <div className="commonContainer   ">
        <div className={`flex items-center justify-between  `}>
          <div className="font-bold text-2xl text-textColor">
            <a href="">
              <span className="text-highlightColor">Brick</span>Works
            </a>
          </div>
          <ul
            className={`hidden   gap-x-5 text-lg ${
              isSticky ? "lg:flex" : "md:flex"
            }`}
          >
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className={`hover:text-highlightColor relative font-semibold px-2 ${
                  isActive === link.path
                    ? "text-highlightColor"
                    : "text-textColor"
                }`}
              >
                <Link to={link.path}>{link.nav}</Link>
              </li>
            ))}
          </ul>
          <div className={`flex ${isSticky ? "lg:hidden" : "md:hidden "} `}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
