// import React from "react";
// import pricing from "../../assets/images/pricing.png";
// import expert from "../../assets/images/expert.png";

// const Chooseus = () => {
//   return (
//     <div className="min-h-screen ">
//     {/* <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50"> */}
//       <div className="commonContainer  ">
//         <div className="flex flex-col items-center justify-center commonContainer">
//           <h1 className="font-semibold text-highlightColor text-xl">
//             Why Choose Us?
//           </h1>
//           <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
//             Excellence in Construction Services
//           </p>
//           <p className="text-sm text-textColor text-center max-w-2xl">
//             Committed to quality and innovation, we deliver tailored
//             construction solutions that exceed expectations.
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-5 my-7">
//           <div className="max-w-[20rem] p-6 bg-white border border-gray-200 rounded-xl shadow ">
//             <svg
//               className="w-16 h-16 text-yellow-500 mb-3" // Adjust size and color here
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 256 256"
//             >
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 strokeLinecap="round"
//                 strokeMiterlimit="10"
//                 className="stroke-current"
//                 d="M118 222.57v1.36c0 5.25 4.25 9.5 9.5 9.5h0c5.25 0 9.5-4.25 9.5-9.5v-1.36h13.55a6.91 6.91 0 0 0 6.29-4.06l.41-.91c1.15-2.55 1.75-5.31 1.75-8.1v-16.72c0-2.33-1.88-4.21-4.21-4.21h-52.58c-2.33 0-4.21 1.88-4.21 4.21v16.87c0 2.84.62 5.65 1.81 8.23l1.44 3.12c.45.98 1.44 1.6 2.52 1.58l3.64-.07"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 strokeLinecap="round"
//                 strokeMiterlimit="10"
//                 className="stroke-current"
//                 d="M157 179.57v-10.04c0-6.9 2.77-13.56 7.8-18.28 10.57-9.93 17.19-24.02 17.19-39.67 0-37.6-38.08-66.3-77.78-49.64-11.72 4.92-21.16 14.23-26.16 25.91-10.53 24.59-3.61 48.52 12.05 63.3a25.257 25.257 0 0 1 7.91 18.38v10.04"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M108 198.57h27"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M122 210.57h27"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M128 22.57v22"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M172.06 34.65 161.11 53.6"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M204.66 66.94l-18.95 10.93"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M217 111.57l-22-.02"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M205.07 155.58l-18.94-10.96"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M51.56 156.18l18.97-10.91"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M39 112.57l22 .04"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M51.27 67.54 70.2 78.52"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M83.62 35l10.9 18.97"
//               />
//               <path
//                 fill="none"
//                 strokeWidth="7"
//                 className="stroke-current"
//                 d="M122 178.57v-9.2c0-10.76-3.87-21.17-10.9-29.31h0a6.936 6.936 0 0 1-1.69-4.54v0c0-3.83 3.11-6.94 6.94-6.94H132"
//               />
//             </svg>

//             <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
//               Cutting-Edge Solutions
//             </h5>
//             <p className="font-normal text-textColor">
//               We utilize the latest technologies to provide innovative
//               construction solutions that enhance efficiency and safety across
//               all projects.
//             </p>
//           </div>
//           <div className="max-w-[20rem] p-6 bg-white border border-gray-200 rounded-xl shadow ">
//             <img src={pricing} className="h-16 mb-3" alt="" />
//             <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
//               Transparent Princing
//             </h5>
//             <p className="font-normal text-textColor">
//               We provide clear and upfront pricing, ensuring no hidden costs or
//               surprises throughout the process.
//             </p>
//           </div>
//           <div className="max-w-[20rem] p-6 bg-white border border-gray-200 rounded-xl shadow ">
//             <img src={expert} className="h-14 mb-3" alt="" />
//             <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
//               Proven Expertise
//             </h5>
//             <p className="font-normal text-textColor">
//               Our experienced team brings a wealth of knowledge and skill to
//               ensure successful project outcomes.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chooseus;

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

        {/* Bento Grid with Icons */}
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl shadow-md bg-white p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Chooseus;
