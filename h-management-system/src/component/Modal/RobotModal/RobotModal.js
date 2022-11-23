import React, { useState } from 'react';
import Modal from 'react-modal';
import './RobotModal.scss';

const RobotModal = ({ type, contents, open, close, event, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const confirmHandler = e => {
    e.stopPropagation();
    event();
  };

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  return (
    <Modal isOpen={isOpen}>
      This isModal
      <button onClick={setIsOpen(close)}>close</button>
    </Modal>
  );
};

export default RobotModal;
