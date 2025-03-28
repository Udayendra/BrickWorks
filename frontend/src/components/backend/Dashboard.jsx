import React, { useContext } from "react";
import Footer from "../common/Footer";
import { SideBar } from "./SideBar";


const Dashboard = () => {
  return (
    <>
      <div className="flex w-full h-[100vh]">
        <SideBar/>
        <div className="w-full flex items-center justify-center">
          <h2 className="text-4xl text-gray-700">
            Dashboard Content Goes Here
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
