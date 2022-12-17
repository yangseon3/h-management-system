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
        width={20.3125}
        height={16.3021}
        boxShadow="#8690C2 0 0 0.3646vw 0.1042vw"
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
        width={15.3646}
        height={20.8333}
        boxShadow="#8690C2 0 0 0.3646vw 0.1042vw"
      />
    ),
  };

  return <>{modal[type]}</>;
};

export default CommonModal;
