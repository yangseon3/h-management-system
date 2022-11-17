import React from 'react';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import DateModal from './DateModal/DateModal';
import './Modal.scss';
import RobotModal from './RobotModal/RobotModal';

const Modal = ({ type, contents, close, event, title, data, setData }) => {
  const modal = {
    confirm: (
      <ConfirmModal
        close={close}
        contents={contents}
        event={event}
        title={title}
        data={data}
        setData={setData}
      />
    ),
    date: (
      <DateModal
        close={close}
        contents={contents}
        event={event}
        title={title}
        data={data}
        setData={setData}
      />
    ),
    robot: (
      <RobotModal
        close={close}
        contents={contents}
        event={event}
        title={title}
        data={data}
        setData={setData}
      />
    ),
  };

  return <>{modal[type]}</>;
};

export default Modal;
