import React from "react";
import { Link } from "react-router-dom";
import {
  FaWrench,
  FaDraftingCompass,
  FaNewspaper,
  FaHardHat,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import Footer from "../common/Footer";
import { SideBar } from "./SideBar";

const Dashboard = () => {
  const summaryData = [
    {
      title: "Projects",
      icon: <FaDraftingCompass size={28} />,
      total:12,
      active: 8,
      inactive: 4,
      link: "/admin/projects",
    },
    {
      title: "Services",
      icon: <FaWrench size={28} />,
      total:12,
      active: 5,
      inactive: 3,
      link: "/admin/show",
    },
    {
      title: "Articles",
      icon: <FaNewspaper size={28} />,
      total:12,
      active: 4,
      inactive: 1,
      link: "/admin/article",
    },
    {
      title: "Testimonials",
      icon: <MdOutlineRateReview size={28} />,
      total:12,
      active: 2,
      inactive: 1,
      link: "/admin/testimonial",
    },
  ];

  return (
    <>
      <div className="flex w-full h-[100vh]">
        <SideBar />
        <div className="w-full overflow-y-auto">
          <div className="p-6 space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {summaryData.map((item, index) => (
                <SummaryCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  active={item.active}
                  inactive={item.inactive}
                  total={item.total}
                  link={item.link}
                />
              ))}
            </div>

            {/* Recent Activity */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-2">
                <RecentItem label="New Project Added: Residential Tower" />
                <RecentItem label="New Article Published: Safety Guidelines" />
                <RecentItem label="Testimonial Pending Approval from John" />
              </div>
            </section>

            {/* Pending Items */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Pending Items</h2>
              <ul className="list-disc list-inside text-red-600">
                <li>2 testimonials pending approval</li>
                <li>1 project missing location</li>
              </ul>
            </section>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const SummaryCard = ({ icon, title, total, active, inactive, link }) => (
  <Link
    to={link}
    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-200 p-5 flex flex-col space-y-4"
  >
    <div className="flex items-center space-x-3">
      <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 text-sm font-medium">
      Total: <span className="text-gray-800 font-bold">{total}</span>
    </div>
    <div className="flex justify-between text-sm font-medium">
      <span className="text-green-600">Active: {active}</span>
      <span className="text-red-500">Inactive: {inactive}</span>
    </div>
  </Link>
);


const RecentItem = ({ label }) => (
  <div className="bg-gray-50 border rounded p-2 text-sm text-gray-800 shadow-sm">
    {label}
  </div>
);



export default Dashboard;
