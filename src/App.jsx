import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import BookingTab from './components/Booking/Booking';
import Hero from './components/Hero/Hero';
import About from './components/About Us/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Aos Initialization
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    Aos.refresh();
  }, []);

  return (
    <div className={`theme-${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      {/* <BookingTab /> */}
      <Hero theme={theme} />
      <About />
      <WhyChooseUs />
      <Services />
      
      
    </div>
  );
};

export default App;