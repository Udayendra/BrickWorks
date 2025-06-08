import React from "react";

const loading = ({ className }) => {
  return (
    <div
      className={` border-t-transparent border-b-transparent rounded-full animate-spin ml-3 ${className}`}
    ></div>
  );
};

export default loading;
