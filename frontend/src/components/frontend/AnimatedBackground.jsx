import React, { useEffect, useState } from "react";

const AnimatedBackground = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden ">
        
        <div
          className="absolute w-[500px] h-[500px] bg-purple-400 opacity-30 rounded-full animate-blob"
          style={{
            top: `${-200 + offsetY * 0.1}px`,
            left: `${-200 + offsetY * 0.05}px`,
          }}
        />

        
        <div
          className="absolute w-[500px] h-[500px] bg-yellow-400 opacity-30 rounded-full  animate-blob animation-delay-2000"
          style={{
            top: `${300 - offsetY * 0.1}px`,
            right: `${-200 + offsetY * 0.08}px`,
          }}
        />
      </div> */}

      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Blob 1 */}
        <div
          className="blob1 bg-purple-400 opacity-30"
          style={{ animationDelay: "0s", top: "100px", left: "-100px" }}
        />

        {/* Blob 2 */}
        <div
          className="blob1 bg-yellow-400 opacity-30"
          style={{ animationDelay: "2s" , top: "300px", right: "100px"  }}
        />
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 flex justify-center items-center min-h-screen w-full">
        <div className="w-full backdrop-blur-[200px] ">{children}</div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
