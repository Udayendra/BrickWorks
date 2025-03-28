import React from "react";
import NavLinks from "./NavLinks";

const servicesLinks = [
  {
    linkName: "Residential Construction",
    link: "/",
  },
  {
    linkName: "General Contracting",
    link: "/",
  },
  {
    linkName: "Infrastructure & Civil Engineering",
    link: "/",
  },
  {
    linkName: "Construction Management",
    link: "/",
  },
  {
    linkName: "Project Planning & Design",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-textColor w-full pt-10 px-4 sm:px-8 relative">
<div className="absolute -top-[25px] left-0 rounded-t-[25px] w-full h-[25px] bg-textColor"></div>
      <div className="commonContainer max-w-screen-lg mx-auto">
        <div className="grid gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <div>
            <h1 className="text-highlightColor font-bold text-2xl">
              BrickWorks Constructions
            </h1>
            <p className="text-white max-w-xs mt-2">
              Our post-construction service gives you peace of mind knowing that
              we are still here for you even after.
            </p>
          </div>
          <div>
            <h1 className="text-highlightColor font-bold text-2xl">
              Quick Links
            </h1>
            <ul className="text-white space-y-2 mt-2">
              {NavLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="hover:text-accentColor transition-colors duration-300"
                  >
                    {item.nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-highlightColor font-bold text-2xl">Login</h1>
            <ul className="text-white space-y-2 mt-2">
              <li>
                <a
                  href="admin/login"
                  className="hover:text-accentColor transition-colors duration-300"
                >
                  Admin Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-highlightColor font-bold text-2xl">
              Contact Us
            </h1>
            <div className="text-white mt-2 space-y-1">
              <p>(111-111-111)</p>
              <p>info@brickworks.org</p>
              <p>
                123, Maple Business Park Hinjewadi Phase 1 Pune, Maharashtra Pin
                Code: 411057 India
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm py-8 border-t border-highlightColor">
          © {new Date().getFullYear()} BrickWorks Constructions. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
