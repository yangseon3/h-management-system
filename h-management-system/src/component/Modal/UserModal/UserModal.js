import React from 'react';
import Modal from 'react-modal';
import './UserModal.scss';

const UserModal = ({
  type,
  contents,
  close,
  event,
  title,
  width,
  height,
  children,
}) => {
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
      onRequestClose={closeHandler}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'transparent',
          zIndex: 10000,
        },
        content: {
          position: 'absolute',
          top: '8%',
          left: '70%',
          right: 'auto',
          bottom: 'auto',
          border: '1px solid #E9ECF9',
          width: `${width ? width + 'vw' : 'auto'}`,
          boxSizing: 'border-box',
          background: 'white',
          borderRadius: '0.5em',
          outline: 'none',
          padding: '1.5em 1em',
          boxSizing: 'border-box',
          boxShadow: '#8690C2 0px 0px 7px 2px',
          textAlign: 'center',
          zIndex: 30,
          overflow: 'hidden',
          height: `${height}vw`,
        },
      }}
    >
      <p>{title}</p>
      <div>{children}</div>
      <button>로그아웃</button>
    </Modal>
  );
};

export default UserModal;
