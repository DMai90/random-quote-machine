import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ color }) => {
  return (
    <div className={`spinner-border text-${color} mx-auto my-3`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string.isRequired
};

export default Spinner;
