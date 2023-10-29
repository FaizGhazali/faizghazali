import React from 'react';

const MyLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'orange' }}>
      <header>
        {/* Header content */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default MyLayout;
