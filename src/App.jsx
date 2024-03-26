import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About Us/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import VerticalForm from './components/Form/BookNow';

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
      {/* Pass the theme prop to the Hero component */}
      <Hero theme={theme} onBookNowClick={handleBookNowClick} />
      <About />
      <WhyChooseUs />
      <Services />
      
      <VerticalForm showForm={showForm} onClose={handleCloseForm} /> {/* Pass props to VerticalForm */}
    </div>
  );
};

export default App;