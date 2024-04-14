import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PointProtectionFilmImage from '../../assets/Atlast Assets/Hero Images/PPF2.jpg';
import GrapheneCeramicCoatingImage from '../../assets/Atlast Assets/Hero Images/graphene.png';
import PaintCorrectionEnhancementImage from '../../assets/Atlast Assets/Hero Images/paintcorrection.png';
import InteriorDetailImage from '../../assets/Atlast Assets/Hero Images/interiordetailing.png';
import './custom-slider.css';

const Services = ({ onBookNowClick }) => {
  const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);
  const [isBookingSent, setIsBookingSent] = useState(false);
  const calendlyRef = useRef(null);

  useEffect(() => {
    if (isCalendlyVisible) {
      // Initialize Calendly script when the component mounts or when isCalendlyVisible changes
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Add event listener to close widget when clicked outside
      const handleClickOutside = (event) => {
        if (calendlyRef.current && !calendlyRef.current.contains(event.target)) {
          setIsCalendlyVisible(false);
          setIsBookingSent(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        // Clean up script and event listener when component unmounts
        document.body.removeChild(script);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isCalendlyVisible]);

  const handleBookingSent = () => {
    setIsCalendlyVisible(false);
    setIsBookingSent(true);
  };

  const openCalendlyWidget = () => {
    if (!isCalendlyVisible) {
      setIsCalendlyVisible(true);
      setIsBookingSent(false);
      // Call the onBookNowClick function passed from the parent component
      if (typeof onBookNowClick === 'function') {
        onBookNowClick();
      }
    }
  };


  // Define skillsData
  const skillsData = [
    {
      id: 1,
      name: 'Paint Protection Film',
      image: PointProtectionFilmImage,
      link: '#',
      description: '',
      aosDelay: '300',
      interval: 2000,
    },
    {
      id: 2,
      name: 'Graphene Ceramic Coating',
      image: GrapheneCeramicCoatingImage,
      link: '#',
      description: '',
      aosDelay: '500',
      interval: 3000,
    },
    {
      id: 3,
      name: 'Paint Correction/Enhancement',
      image: PaintCorrectionEnhancementImage,
      link: '#',
      description: '',
      aosDelay: '1000',
      interval: 4000,
    },
    {
      id: 4,
      name: 'Interior Detail',
      image: InteriorDetailImage,
      link: '#',
      description: '',
      aosDelay: '1500',
      interval: 5000,
    },
  ];

  return (
    <>
      <span id="about"></span>
      <div className="py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container bg-neutral-400 mr-auto mb-auto">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif mt-2"
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
                style={{ overflow: 'hidden' }}
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
            {!isCalendlyVisible && !isBookingSent && (
              <button onClick={openCalendlyWidget} className="btn mb-3 bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-semibold">Book Now</button>
            )}
            {isBookingSent && (
              <p className="text-lg text-green-500">Booking Sent!</p>
            )}
          </div>
        </div>
      </div>
      {/* Render the Calendly inline widget */}
      {isCalendlyVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div ref={calendlyRef} className="calendly-floating-widget">
            <div className="calendly-inline-widget relative" data-url="https://calendly.com/atlaspremiumautoshield/30min" style={{ minWidth: '320px', height: '700px' }}>
              <button className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded-md" onClick={() => setIsCalendlyVisible(false)}>Close</button>
            </div>
          </div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      )}
    </>
  );
};

export default Services;