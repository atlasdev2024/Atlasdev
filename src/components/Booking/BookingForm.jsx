// import React, { useState } from 'react';

// const ModalBookingForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     service: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log(formData);
//     onClose(); // Close modal after form submission
//   };

//   return (
//     <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Booking Form</h5>
//             <button type="button" className="btn-close" onClick={onClose}></button>
//           </div>
//           <div className="modal-body">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Name:</label>
//                 <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email:</label>
//                 <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Contact Number:</label>
//                 <input type="tel" className="form-control" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Choose your Service:</label>
//                 <input type="text" className="form-control" name="service" value={formData.service} onChange={handleChange} required />
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalBookingForm;