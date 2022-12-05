import React from 'react';
import UserModal from './UserModal/UserModal';
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
    user: (
      <UserModal
        close={close}
        children={children}
        event={event}
        title={title}
        data={data}
        setData={setData}
        width={20}
        height={20}
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
