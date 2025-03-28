import React from "react";
import img1 from "../../../assets/images/pexels-sindre-fs-1040880.jpg";
import img5 from "../../../assets/images/pexels-pixabay-220453.jpg";
import img4 from "../../../assets/images/pexels-kampus-5920774.jpg";
import img3 from "../../../assets/images/voyage-pro-ZS9DlF_YBSM-unsplash.jpg";
import img2 from "../../../assets/images/pexels-olly-3783725.jpg";

const Team = () => {

    const teamMembers = [
      {
        name: "John Doe",
        role: "Project Manager",
        image: img1,
        bio: "With over 10 years in the construction industry, John ensures that every project is completed on time and to the highest standard.",
      },
      {
        name: "Sarah Lee",
        role: "Lead Architect",
        image: img2,
        bio: "Sarah brings her passion for sustainable architecture and design to every project, creating spaces that are both beautiful and functional.",
      },
      {
        name: "Alex Brown",
        role: "Senior Engineer",
        image: img3,
        bio: "Alex is known for his expertise in structural engineering, ensuring that every construction meets the highest standards of safety and durability.",
      },
      {
        name: "Emily White",
        role: "Interior Designer",
        image: img4,
        bio: "Emily specializes in transforming spaces with a keen eye for design and detail, bringing aesthetic and functionality together in every project.",
      },
      {
        name: "David Smith",
        role: "Site Supervisor",
        image: img5,
        bio: "David is responsible for overseeing daily operations at construction sites, ensuring each project progresses smoothly and safely.",
      },
      {
        name: "Rachel Green",
        role: "Client Relations Manager",
        image: 'img6',
        bio: "Rachel builds strong relationships with our clients, ensuring open communication and complete satisfaction from project start to finish.",
      },
    ];

  return (
    <div className="commonContainer py-16 text-center ">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-72 bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-highlightColor text-sm font-medium mt-2">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
  );
};

export default Team;
