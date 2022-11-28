import React, { useState } from 'react';
import './RobotItem.scss';
import Modal from 'react-modal';
import { getHomeRobot, getInitRobot } from '../RobotControl/RobotControl';

const RobotItem = ({ robot_id, posX, posY, data }) => {
  let robotImg = '/images/robot/octa_robot_black.png';
  if (data.serialNumber === 'virtual') {
    robotImg = '/images/robot/virtual_robot.png';
  } else if (Number(data.battery) <= 15) {
    robotImg = '/images/robot/octa_robot_orange.png';
  } else if (data.error !== null) {
    robotImg = '/images/robot/octa_robot_red.png';
  } else if (data.destination === '0') {
    robotImg = '/images/robot/octa_robot_gray.png';
  } else if (data.state === 'move') {
    robotImg = '/images/robot/octa_robot_black_move.png';
  }
  const userId = data.user_id;

  const [isModal, setIsModal] = useState(false);

  const handleRobotClick = () => {
    setIsModal(true);
  };

  const handleReturn = async () => {
    let [error, message] = await getHomeRobot(userId, robot_id);
    if (!error) {
      setIsModal(false);
    }
  };
  const handleInit = async () => {
    let [error, message] = await getInitRobot(userId, robot_id);
    if (!error) {
      setIsModal(false);
    }
  };
  return (
    <>
      <div
        className="robotItemWrap"
        style={{
          left: `${(posX * 100) / 1920}vw`,
          top: `${(posY * 100) / 1920}vw`,
        }}
        onClick={handleRobotClick}
      >
        <img src={robotImg} alt="robot-icon-img" />
      </div>
      {isModal && (
        <Modal
          type="robot"
          isOpen={isModal}
          onRequestClose={() => setIsModal(false)}
          style={modalStyle}
        >
          <p>로봇ID{robot_id}</p>
          <button onClick={() => setIsModal(false)}>close</button>
          <button onClick={handleReturn}>복귀</button>
          <button onClick={handleInit}>초기화</button>
        </Modal>
      )}
    </>
  );
};

export default RobotItem;
const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    zIndex: 999,
  },
  content: {
    background: '#ffffe7',
    overflow: 'auto',
    inset: '20vh 38vw',
    borderRadius: '12px',
    outline: 'none',
    border: 'none',
    zIndex: 10,
  },
};
