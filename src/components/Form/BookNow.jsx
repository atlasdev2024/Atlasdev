import React, { useState } from 'react';

const VerticalForm = ({ onClose, theme, services }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    carModel: '',
    selectedPackage: '', // New state for the selected package
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., log form data
    console.log(formData);
    // Reset form fields
    setFormData({ name: '', contactNumber: '', carModel: '', selectedPackage: '' });
  };

  // Define styles based on the theme
  const formStyles = {
    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    border: `2px solid ${theme === 'dark' ? '#ffffff' : '#000000'}`,
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  // Define input styles
  const inputStyles = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${theme === 'dark' ? '#ffffff' : '#000000'}`, // Set border color based on theme
    backgroundColor: theme === 'dark' ? '#364152' : '#f3f4f6', // Set background color based on theme
    color: theme === 'dark' ? '#ffffff' : '#000000', // Set text color based on theme
  };

  // Define button styles
  const buttonStyles = {
    margin: '0 20px', // Add margin between buttons
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyles} />
      </div>
      <div className="mb-3">
        <label htmlFor="contactNumber" className="form-label">Contact Number</label>
        <input type="tel" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required style={inputStyles} />
      </div>
      <div className="mb-3">
        <label htmlFor="carModel" className="form-label">Car Model</label>
        <input type="text" className="form-control" id="carModel" name="carModel" value={formData.carModel} onChange={handleChange} required style={inputStyles} />
      </div>
      <div className="mb-3">
        <label htmlFor="selectedPackage" className="form-label">Choose your package</label>
        <select id="selectedPackage" name="selectedPackage" value={formData.selectedPackage} onChange={handleChange} className="form-select" style={inputStyles}>
          <option value="">Select a package</option>
          {services.map((Services, index) => (
            <option key={index} value={Services.name}>{Services.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-bold" style={buttonStyles}>Submit</button>
      <button type="button" onClick={onClose} className="btn bg-slate-800 text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 font-bold">Close</button>
    </form>
  );
};

export default VerticalForm;