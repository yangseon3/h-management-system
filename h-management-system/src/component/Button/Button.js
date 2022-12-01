import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import SubBtn from './SubBtn';
import './Button.scss';

const Button = ({ type, text, event }) => {
  const button = {
    primaryBtn: <PrimaryBtn text={text} event={event} />,
    subBtn: <SubBtn text={text} event={event} />,
  };

  return <div className="button">{button[type]}</div>;
};

export default Button;
