import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PointProtectionFilmImage from "../../assets/Atlast Assets/Hero Images/PPF2.jpg";
import GrapheneCeramicCoatingImage from "../../assets/Atlast Assets/Hero Images/graphene.png";
import PaintCorrectionEnhancementImage from "../../assets/Atlast Assets/Hero Images/paintcorrection.png";
import InteriorDetailImage from "../../assets/Atlast Assets/Hero Images/interiordetailing.png";
import "./custom-slider.css";

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
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formRef]);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_ztlqjoe', 'template_3vqzxvf', e.target, 'l2MsXRJSdxpIJyh-H')
      .then((result) => {
        console.log('Appointment Sent:', result.text);
        // Optionally, you can show a success message or perform other actions here
      })
      .catch((error) => {
        console.error('Appointment failed:', error);
        // Optionally, you can show an error message or perform other actions here
      });

    // Reset form fields
    e.target.reset();
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
              onClick={handleOpenForm}
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-bold"
            >
              Book Now
            </button>
          </div>
          {isFormVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md pr-10" ref={formRef}>
                <form onSubmit={sendEmail}>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Full Name"
                  />
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4"
                  />
                  <label className="block mb-2">Contact Number</label>
                  <input
                    type="text"
                    name="contact_number"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4"
                  />
                  <label className="block mb-2">Preferred Date</label>
                  <input
                    type="text"
                    name="preferred_date"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4"
                    placeholder="MM/DD/YYYY"
                  />
                  <label className="block mb-2">Services</label>
                  <select
                    name="services"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4"
                  >
                    <option value="service1">Paint Protection Film</option>
                    <option value="service2">Graphene Ceramic Coating</option>
                    <option value="service3">Paint Correction/Enhancement</option>
                    <option value="service4">Interior Detail</option>
                  </select>
                  <label className="block mb-2">Message</label>
                  <textarea
                    name="message"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Preferred Date of Booking and Chosen Services"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send"
                    className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-semibold"
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;