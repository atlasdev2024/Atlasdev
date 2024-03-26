import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IntlProvider } from 'react-intl';

const VerticalForm = ({ showForm, onClose, services }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    selectedPackage: '',
  });

  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...formData,
      selectedDate: startDate,
    };

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      setFormData({ name: '', email: '', contactNumber: '', selectedPackage: '' });
      setStartDate(new Date());
      setShowCalendar(false);
      onClose(); // Close the form after successful submission

      console.log('Appointment submitted successfully');
    } catch (error) {
      console.error('Error submitting appointment:', error.message);
    }
  };

  const handleClose = () => {
    setShowCalendar(false); // Close the calendar if open
    onClose(); // Close the form
  };

  return (
    <IntlProvider locale="en">
      {showForm && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              autoComplete="name"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              autoComplete="email"
            />
            <TextField
              label="Contact Number"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              autoComplete="tel"
            />
            {services && services.length > 0 && (
              <TextField
                select
                label="Choose your package"
                name="selectedPackage"
                value={formData.selectedPackage}
                onChange={handleChange}
                fullWidth
                margin="normal"
                autoComplete="off"
              >
                {services.map((service) => (
                  <MenuItem key={service.id} value={service.name}>
                    {service.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowCalendar(true)}
              style={{ marginBottom: '10px', width: '100%' }}
            >
              Open Calendar
            </Button>
            {showCalendar && (
              <DatePicker
                value={startDate}
                onChange={(date) => setStartDate(date)}
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginBottom: '10px', width: '100%' }}
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={handleClose} // Call handleClose to close the form
              variant="contained"
              color="secondary"
              style={{ width: '100%' }}
            >
              Close
            </Button>
          </form>
        </div>
      )}
    </IntlProvider>
  );
};

export default VerticalForm;