import React from 'react';
import CarPng from '../../assets/Atlast Assets/Hero Images/AboutCar-2-400px.png';

const About = () => {
  return (
    <div className="about-container bg-neutral-900">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Car"
              className="w-full max-w-md mx-auto sm:max-w-none sm:mx-0 sm:scale-105 sm:translate-x-11 max-h-[300px] h-auto drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className="space-y-5 sm:p-0 pb-6">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif text-primary underline">
              About Us
            </h1>
            <p data-aos="fade-up" className='text-white'>
              "Atlas Premium Auto Shield is more than just a name, it's a symbol of unparalleled quality
              and service in the world of auto detailing. With a meticulous approach and a passion for
              perfection, our team takes pride in restoring your vehicle's showroom shine, ensuring that
              it remains a source of pride and admiration for years to come."
            </p>
            <p data-aos="fade-up" className='text-white'>
              "Our team of professionals is dedicated to elevating your driving experience by restoring
              your vehicle's luster and protecting it for the long haul, ensuring that every journey is
              met with unparalleled beauty and sophistication."
            </p>
            <button data-aos="fade-up" className="button-outline w-full sm:w-auto">
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;