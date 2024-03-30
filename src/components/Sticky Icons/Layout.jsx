// Layout.jsx
import React from 'react';
import MessengerIcon from './MessengerIcon';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Other layout components */}
      {children}
      <MessengerIcon />
    </div>
  );
};

export default Layout;