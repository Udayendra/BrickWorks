import React from "react";
import { SideBar } from "../SideBar";
import Loading from "../loading";
import Footer from "../../common/Footer";

const ShowArticle = () => {
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="w-full flex flex-col items-center px-12 py-10 h-[100vh] overflow-x-auto">
          <div className="w-full flex flex-col items-center justify-center px-12 py-10 h-[100vh]">
            <Loading className="border-2 border-black h-[50px] w-[50px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowArticle;
