/* eslint-disable react/prop-types */
import React from 'react';

function SectionText({ children }) {
  return (
    <div
      className="    d-flex align-items-center   "
      style={{ minHeight: '70vh', marginTop: '10rem' }}
    >
      <div className="container-fluid   ">{children}</div>
    </div>
  );
}

export default SectionText;
