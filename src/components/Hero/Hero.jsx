import React, { useState, useEffect } from 'react';
import grayCarPng from '../../assets/Atlast Assets/Hero Images/AtlasHerolight1-640x488.png';

const Hero = ({ onBookNowClick }) => {
  const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);

  useEffect(() => {
    if (isCalendlyVisible) {
      // Initialize Calendly script when the component mounts or when isCalendlyVisible changes
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        // Clean up script when component unmounts
        document.body.removeChild(script);
      };
    }
  }, [isCalendlyVisible]);

  const openCalendlyWidget = () => {
    setIsCalendlyVisible(true);
    // Call the onBookNowClick function passed from the parent component
    if (typeof onBookNowClick === 'function') {
      onBookNowClick();
    }
  };

  return (
    <div className="hero-container bg-slate-300 relative">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div data-aos="zoom-in" data-aos-duration="1500">
            <img src={grayCarPng} alt="Gray Car" className="w-full max-w-md mx-auto" />
          </div>
          <div className="md:pl-8"> {/* Added padding for medium size screens and above */}
            <div className="space-y-5">
              <p data-aos="fade-up" className="text-primary text-xl lg:text-xl font-semibold underline decoration-solid">Crafting Perfection, One Detail at a Time.</p>
              <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl lg:text-5xl font-semibold font-serif">Drive with Confidence!</h1>
              <p data-aos="fade-up" data-aos-delay="600" className="text-lg lg:text-xl font-normal leading-relaxed">"Precision Detailing: Where True Beauty is Revealed. With painstaking attention to every contour, our skilled artisans breathe new life into your vehicle, unveiling a level of pristine elegance that captivates the eye and rejuvenates your driving experience."</p>
              {/* Render the "Book Now" button */}
              {!isCalendlyVisible && (
                <button onClick={openCalendlyWidget} className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-semibold">Book Now</button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Render the Calendly inline widget */}
      {isCalendlyVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="calendly-floating-widget" style={{ minWidth: '320px', height: '700px' }}>
            <div className="calendly-inline-widget" data-url="https://calendly.com/atlaspremiumautoshield/30min" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      )}
    </div>
  );
};

export default Hero;