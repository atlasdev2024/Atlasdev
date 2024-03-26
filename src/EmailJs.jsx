import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const VerticalForm = ({ onClose, theme, services }) => {
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
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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
  };

  // Rest of your component code...
};

export default VerticalForm;