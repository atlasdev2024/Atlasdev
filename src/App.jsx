import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About Us/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import VerticalForm from './components/Form/EmailJs';
import MessengerIcon from './components/Sticky Icons/MessengerIcon';
import Footer from './components/Footer/Footer'

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      {/* Pass the onBookNowClick prop to the Hero component */}
      <Hero onBookNowClick={handleBookNowClick} />
      <About />
      <WhyChooseUs />
      <Services />
      
      {/* Pass props to VerticalForm */}
      <VerticalForm showForm={showForm} onClose={handleCloseForm} />

      {/* Include MessengerIcon component */}
      <MessengerIcon />
      <Footer />
    </div>
  );
};

export default App;