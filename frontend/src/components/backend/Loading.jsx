import React from "react";

const Loading = ({ className }) => {
  return (
    <div
      className={` border-t-transparent border-b-transparent rounded-full animate-spin ml-3 ${className}`}
    ></div>
  );
};

export default Loading;
