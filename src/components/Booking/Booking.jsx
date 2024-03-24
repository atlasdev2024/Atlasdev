import React from 'react';

const BookingTab = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Book Your Appointment</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input id="date" type="date" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input id="time" type="time" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" type="text" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Book Now</button>
      </form>
    </div>
  );
}

export default BookingTab;