import React from 'react';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import './CommonModal.scss';
import RobotModal from './RobotModal/RobotModal';

const CommonModal = ({
  type,
  children,
  close,
  event,
  title,
  data,
  setData,
}) => {
  const modal = {
    confirm: (
      <ConfirmModal
        close={close}
        children={children}
        event={event}
        title={title}
        data={data}
        setData={setData}
      />
    ),
    robot: (
      <RobotModal
        close={close}
        children={children}
        event={event}
        title={title}
        data={data}
        setData={setData}
        width={24}
        height={30}
      />
    ),
  };

  return <>{modal[type]}</>;
};

export default CommonModal;
