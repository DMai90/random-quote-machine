import React from 'react';

const Spinner = ({ color }) => {
  return (
    <div className={`spinner-border text-${color} mx-auto my-3`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
