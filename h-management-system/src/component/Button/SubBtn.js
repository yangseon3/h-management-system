import React from 'react';

const SubBtn = ({ text, event }) => {
  return (
    <button className="subBtn" onClick={event}>
      {text}
    </button>
  );
};

export default SubBtn;
