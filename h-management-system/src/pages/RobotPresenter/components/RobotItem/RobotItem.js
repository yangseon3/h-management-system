import CommonModal from 'component/Modal/CommonModal';
import React, { useState } from 'react';
import { getHomeRobot, getInitRobot } from '../RobotControl/RobotControl';
import './RobotItem.scss';

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
        <CommonModal
          type="robot"
          close={() => setIsModal(false)}
          title="로봇제어"
        >
          <p>로봇ID{robot_id}</p>
          <button onClick={() => setIsModal(false)}>close</button>
          <button onClick={handleReturn}>복귀</button>
          <button onClick={handleInit}>초기화</button>
        </CommonModal>
      )}
    </>
  );
};

export default RobotItem;
