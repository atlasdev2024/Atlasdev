import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About Us/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import VerticalForm from './components/Form/EmailJs';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className={`theme-${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      {/* Pass the theme prop to the Hero component and the onBookNowClick prop */}
      <Hero theme={theme} onBookNowClick={handleBookNowClick} />
      <About />
      <WhyChooseUs />
      <Services />
      
      {/* Pass props to VerticalForm */}
      <VerticalForm showForm={showForm} onClose={handleCloseForm} />
    </div>
  );
};

export default App;