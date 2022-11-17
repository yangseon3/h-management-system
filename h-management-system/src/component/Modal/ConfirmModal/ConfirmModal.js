import React from 'react';
import './ConfirmModal.scss';

const ConfirmModal = ({ type, contents, close, event, title }) => {
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

export default ConfirmModal;
