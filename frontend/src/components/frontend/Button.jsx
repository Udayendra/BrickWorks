import React from "react";

const Button = ({ className, title, onClick }) => {
  return (
    <button
      className={`relative inline-flex px-5 py-2 rounded-md group/button overflow-hidden bg-black`}
      onClick={onClick}
    >
      <span className="z-10 text-white">{title}</span>
      <span
        className={`absolute w-full h-full  top-0 left-0 overflow-hidden group-hover/button:opacity-80 ${className}`}
      ></span>
    </button>
  );
};

export default Button;
