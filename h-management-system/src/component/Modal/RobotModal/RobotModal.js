import React from 'react';
import './RobotModal.scss';

const RobotModal = ({ type, contents, close, event, title }) => {
  const confirmHandler = e => {
    e.stopPropagation();
    event();
  };

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  return <div />;
};

export default RobotModal;
