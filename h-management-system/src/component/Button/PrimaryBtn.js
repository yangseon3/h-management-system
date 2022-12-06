import React from 'react';

const PrimaryBtn = ({ text, event }) => {
  return (
    <button className="primaryBtn" onClick={event}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
