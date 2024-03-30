import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const VerticalForm = ({ onClose, theme, services, isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    carModel: '',
    selectedPackage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_ztlqjoe', 'template_cupm3iu', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Optionally, you can show a success message or perform other actions here
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Optionally, you can show an error message or perform other actions here
      });

    // Reset form fields
    setFormData({ name: '', contactNumber: '', carModel: '', selectedPackage: '' });
    
    // Call onClose function to close the form
    onClose();
  };

  return (
    <div className={`vertical-form ${isVisible ? 'visible' : 'hidden'}`}>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        <input type="text" name="carModel" value={formData.carModel} onChange={handleChange} />
        <input type="text" name="selectedPackage" value={formData.selectedPackage} onChange={handleChange} />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerticalForm;