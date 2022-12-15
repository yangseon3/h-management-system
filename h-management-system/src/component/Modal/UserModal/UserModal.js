import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
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
  boxShadow,
}) => {
  const navigate = useNavigate();

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
          top: '7%',
          left: '78%',
          right: 'auto',
          bottom: 'auto',
          border: '1px solid #E9ECF9',
          width: `${width ? width + 'vw' : 'auto'}`,
          boxSizing: 'border-box',
          background: 'white',
          borderRadius: '0.5em',
          outline: 'none',
          padding: '0',
          boxShadow: boxShadow,
          textAlign: 'center',
          zIndex: 30,
          overflow: 'hidden',
          height: `${height}vw`,
        },
      }}
    >
      <div className="modalContent">{children}</div>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        로그아웃
      </button>
    </Modal>
  );
};

export default UserModal;
