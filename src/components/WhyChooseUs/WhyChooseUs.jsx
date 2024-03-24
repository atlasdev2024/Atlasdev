import React from "react";
import { FaPesoSign } from "react-icons/fa6";
import { FaGem } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";


const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaPesoSign  className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Select Atlas Premium Auto Shield for unbeatable prices in auto detailing, where affordability meets exceptional quality, ensuring you get the best value for your investment in maintaining your vehicle's pristine condition.",
    aosDelay: "0",
  },
  {
    name: "Premium Products",
    icon: (
      <FaGem className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "We believe in using only the best products and techniques to treat your vehicle. From top-of-the-line cleaning solutions to advanced polishing methods, we employ cutting-edge technology to deliver results that exceed expectations.",
    aosDelay: "500",
  },
  {
    name: "Unmatched Expertise",
    icon: (
      <GrCertificate className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "We believe in using only the best products and techniques to treat your vehicle. From top-of-the-line cleaning solutions to advanced polishing methods, we employ cutting-edge technology to deliver results that exceed expectations.",
    aosDelay: "1000",
  },
];
const WhyChooseUs = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;