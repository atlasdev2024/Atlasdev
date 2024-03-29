import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalForm from "../Form/EmailJs";
import PointProtectionFilmImage from "../../assets/Atlast Assets/Hero Images/PPF2.jpg";
import GrapheneCeramicCoatingImage from "../../assets/Atlast Assets/Hero Images/PPF2.jpg";
import PaintCorrectionEnhancementImage from "../../assets/Atlast Assets/Hero Images/PPF.jpg";
import InteriorDetailImage from "../../assets/Atlast Assets/Hero Images/PPF.jpg";
import "./custom-slider.css"; // Import the custom CSS file

const skillsData = [
  {
    id: 1,
    name: "Paint Protection Film",
    image: PointProtectionFilmImage,
    link: "#",
    description: "",
    aosDelay: "300",
    interval: 2000,
  },
  {
    id: 2,
    name: "Graphene Ceramic Coating",
    image: GrapheneCeramicCoatingImage,
    link: "#",
    description: "",
    aosDelay: "500",
    interval: 3000,
  },
  {
    id: 3,
    name: "Paint Correction/Enhancement",
    image: PaintCorrectionEnhancementImage,
    link: "#",
    description: "",
    aosDelay: "1000",
    interval: 4000,
  },
  {
    id: 4,
    name: "Interior Detail",
    image: InteriorDetailImage,
    link: "#",
    description: "",
    aosDelay: "1500",
    interval: 5000,
  },
];

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <span id="about"></span>
      <div className="py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Services Offered
            </h1>
          </div>
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                },
              },
            ]}
          >
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="p-4  rounded-lg"
                style={{ overflow: "hidden" }}
              >
                <div
                  className="h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${skill.image})` }}
                ></div>
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-bold">{skill.name}</h1>
                  <p className="text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleBookNowClick}
              data-aos-delay="1000"
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-bold"
            >
              Book Now
            </button>
          </div>
          {showForm && <VerticalForm onClose={() => setShowForm(false)} services={skillsData} />}
        </div>
      </div>
    </>
  );
};

export default Services;