import React from "react";
import { FaPesoSign } from "react-icons/fa6";
import { FaGem } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import VerticalForm from "../Form/BookNow"; // Import VerticalForm component

// Import your images
import PointProtectionFilmImage from "../../assets/Atlast Assets/Hero Images/PPF2.jpg";
import GrapheneCeramicCoatingImage from "../../assets/Atlast Assets/Hero Images/PPF2.jpg";
import PaintCorrectionEnhancementImage from "../../assets/Atlast Assets/Hero Images/PPF.jpg";
import InteriorDetailImage from "../../assets/Atlast Assets/Hero Images/PPF.jpg";

const skillsData = [
  {
    name: "Point Protection Film",
    image: PointProtectionFilmImage, // Image for Point Protection Film
    link: "#",
    description: "",
    aosDelay: "300",
  },
  {
    name: "Graphene Ceramic Coating",
    // icon: (
    //   <FaGem className="text-5xl text-primary group-hover:text-black duration-300" />
    // ),
    image: GrapheneCeramicCoatingImage, // Image for Graphene Ceramic Coating
    link: "#",
    description: "",
    aosDelay: "500",
  },
  {
    name: "Paint Correction/Enhancement",
    // icon: (
    //   <GrCertificate className="text-5xl text-primary group-hover:text-black duration-500" />
    // ),
    image: PaintCorrectionEnhancementImage, // Image for Paint Correction/Enhancement
    link: "#",
    description: "",
    aosDelay: "1000",
  },
  {
    name: "Interior Detail",
    // icon: (
    //   <GrCertificate className="text-5xl text-primary group-hover:text-black duration-500" />
    // ),
    image: InteriorDetailImage, // Image for Interior Detail
    link: "#",
    description: "",
    aosDelay: "1500",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-dark dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Services Offered
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-primary rounded-lg"
                style={{ backgroundImage: `url(${skill.image})`, backgroundSize: "cover"  }}
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                ></a>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              // data-aos="fade-up"
              data-aos-delay="1000"
              className="btn 
              bg-primary text-black px-6
              py-2 rounded-md hover:bg-primary/80
              duration-300 font-bold"
            >
              Book Now
            </button>
          </div>
          {/* Add the VerticalForm component here */}
          <VerticalForm services={skillsData} />
        </div>
      </div>
    </>
  );
};

export default Services;