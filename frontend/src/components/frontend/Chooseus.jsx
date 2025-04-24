import React from "react";
import { FaHardHat, FaTools, FaClock, FaMoneyCheckAlt } from "react-icons/fa";
import { GiBrickWall, GiCrane } from "react-icons/gi";

const Chooseus = () => {
  const cards = [
    {
      id: 1,
      title: "Built with Safety First",
      desc: "Strict adherence to safety protocols ensures a secure work environment.",
      icon: <FaHardHat className="text-highlightColor text-4xl" />,
    },
    {
      id: 2,
      title: "Skilled Workforce",
      desc: "Our team is made up of certified professionals with years of field experience.",
      icon: <FaTools className="text-highlightColor text-4xl" />,
    },
    {
      id: 3,
      title: "Advanced Equipment",
      desc: "Modern machinery ensures faster, safer, and more accurate builds.",
      icon: <GiCrane className="text-highlightColor text-4xl" />,
    },
    {
      id: 4,
      title: "Quality Materials",
      desc: "We use top-grade materials to ensure durability and structural integrity.",
      icon: <GiBrickWall className="text-highlightColor text-4xl" />,
    },
    {
      id: 5,
      title: "On-Time Delivery",
      desc: "We stick to the schedule, keeping your project on track from start to finish.",
      icon: <FaClock className="text-highlightColor text-4xl" />,
    },
    {
      id: 6,
      title: "Transparent Pricing",
      desc: "Clear and competitive pricing with no hidden charges.",
      icon: <FaMoneyCheckAlt className="text-highlightColor text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen  py-16">
      <div className="commonContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-xl font-semibold text-highlightColor uppercase tracking-wider">
            Why Choose Us?
          </h1>
          <p className="text-[2.25rem] font-medium text-gray-800 leading-tight ">
            Trusted Construction with a Proven <br />
            Track Record
          </p>
          <p className="text-md text-gray-600 mt-2">
            We build more than structures — we build trust and reliability in
            every brick laid.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/50 border border-gray-200 rounded-2xl p-6 hover:border-highlightColor transition-colors duration-300"
            >
              <span className="text-highlightColor font-bold text-2xl">
                {card.icon}
              </span>
              <h3 className="mt-4 font-semibold text-lg text-textColor">
                {card.title}
              </h3>
              <div className="w-10 border-t-2 border-highlightColor my-3" />
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
