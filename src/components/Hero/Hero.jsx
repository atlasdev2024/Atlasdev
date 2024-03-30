import React, { useState, useEffect, useRef } from 'react';
import grayCarPng from '../../assets/Atlast Assets/Hero Images/AtlasHerolight1-640x488.png';
import emailjs from 'emailjs-com';

const Hero = ({ onBookNowClick }) => {
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
    // Call the onBookNowClick function passed from the parent component
    if (typeof onBookNowClick === 'function') {
      onBookNowClick();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the values of "Services" and "Preferred Date"
    const services = e.target.services.value;
    const preferredDate = e.target.preferredDate.value;

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
    <div className="hero-container bg-slate-300 relative">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div data-aos="zoom-in" data-aos-duration="1500">
            <img src={grayCarPng} alt="Gray Car" className="w-full max-w-md mx-auto" />
          </div>
          <div className="space-y-5">
            <p data-aos="fade-up" className="text-primary text-xl lg:text-xl font-semibold underline decoration-solid">Crafting Perfection, One Detail at a Time.</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl lg:text-5xl font-semibold font-serif">Drive with Confidence!</h1>
            <p data-aos="fade-up" data-aos-delay="600" className="text-lg lg:text-xl font-normal leading-relaxed">"Precision Detailing: Where True Beauty is Revealed. With painstaking attention to every contour, our skilled artisans breathe new life into your vehicle, unveiling a level of pristine elegance that captivates the eye and rejuvenates your driving experience."</p>
            {/* Conditionally render the form or the button */}
            {isFormVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md pr-10">
                  <form ref={formRef} onSubmit={sendEmail}>
                    <label className="block mb-2">Name</label>
                    <input type="text" name="user_name" className="block w-full border border-gray-300 rounded-md p-2 mb-4" placeholder='Full Name' />
                    <label className="block mb-2">Email</label>
                    <input type="email" name="user_email" className="block w-full border border-gray-300 rounded-md p-2 mb-4" />
                    <label className="block mb-2">Contact Number</label>
                    <input type="text" name="contact_number" className="block w-full border border-gray-300 rounded-md p-2 mb-4" />
                    <label className="block mb-2">Preferred Date</label>
                    <input type="text" name="preferredDate" className="block w-full border border-gray-300 rounded-md p-2 mb-4" placeholder='MM/DD/YYYY' />
                    <label className="block mb-2">Services</label>
                    <select name="services" className="block w-full border border-gray-300 rounded-md p-2 mb-4">
                      <option value="Paint Protection Film">Paint Protection Film</option>
                      <option value="Graphene Ceramic Coating">Graphene Ceramic Coating</option>
                      <option value="Paint Correction/Enhancement">Paint Correction/Enhancement</option>
                      <option value="Interior Detail">Interior Detail</option>
                    </select>
                    <label className="block mb-2">Message</label>
                    <textarea name="message" className="block w-full border border-gray-300 rounded-md p-2 mb-4" placeholder='Preferred Date of Booking and Chosen Services'></textarea>
                    <input type="submit" value="Send" className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-semibold" />
                  </form>
                </div>
              </div>
            )}
            <button data-aos="fade-up" data-aos-delay="900" onClick={handleOpenForm} className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-semibold">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;