import React from 'react';
import Modal from 'react-modal';
import './RobotModal.scss';

const RobotModal = ({ close, event, title, children, height, width }) => {
  const confirmHandler = e => {
    e.stopPropagation();
    event();
  };

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: `${width ? width + 'vw' : 'auto'}`,
          boxSizing: 'border-box',
          border: 'none',
          background: 'white',
          borderRadius: '0.5em',
          outline: 'none',
          padding: '1.5em 1em',
          textAlign: 'center',
          zIndex: 30,
          overflow: 'hidden',
          height: `${height}vw`,
        },
      }}
    >
      <p>{title}</p>
      <div>{children}</div>
    </Modal>
  );
};

export default RobotModal;
