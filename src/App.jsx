import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About Us/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import VerticalForm from './components/Form/EmailJs';
import MessengerIcon from './components/Sticky Icons/MessengerIcon';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<Home />} /> {/* Wrap each route inside Route */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/whychoose" element={<WhyChooseUs />} />
          
        </Routes>
        
        <VerticalForm showForm={showForm} onClose={handleCloseForm} />
        <MessengerIcon />
        <Footer />
      </div>
    </Router>
  );
};

// Define your Home component
const Home = () => (
  <>
    <Hero />
    <About />
    <WhyChooseUs />
  </>
);

export default App;