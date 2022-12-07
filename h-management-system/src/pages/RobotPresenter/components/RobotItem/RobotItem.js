import API from 'api';
import CommonModal from 'component/Modal/CommonModal';
import { basicApi } from 'lib/config';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getHomeRobot, getInitRobot } from '../RobotControl/RobotControl';
import './RobotItem.scss';

const RobotItem = ({ robotId, data, params }) => {
  let robotImg = '/images/robot/octa_robot_black.png';
  if (data.serialNumber === 'virtual') {
    robotImg = '/images/robot/virtual_robot.png';
  } else if (Number(data.battery) <= 15) {
    robotImg = '/images/robot/octa_robot_orange.png';
  } else if (data.state === '1') {
    robotImg = '/images/robot/octa_robot_black_move.png';
  } else if (data.error !== null) {
    robotImg = '/images/robot/octa_robot_red.png';
  } else if (data.destination === '0') {
    robotImg = '/images/robot/octa_robot_gray.png';
  }
  const userId = data.user_id;
  const [isModal, setIsModal] = useState(false);

  const positionData = useQuery(['PositionKey', params], async () => {
    const { data } = await basicApi.get(
      `${API.robot}/map_id/${params}/position`
    );
    return data;
  });
  const resultData = positionData && positionData.data;

  const logdata = resultData?.robot.filter(data => data.robot_id === robotId);
  const posX = logdata && logdata[0].x;
  const posY = logdata && logdata[0].y;
  const handleRobotClick = () => {
    setIsModal(true);
  };

  const handleReturn = async () => {
    let [error, message] = await getHomeRobot(userId, robotId);
    if (!error) {
      setIsModal(false);
    }
  };
  const handleInit = async () => {
    let [error, message] = await getInitRobot(userId, robotId);
    if (!error) {
      setIsModal(false);
    }
  };
  return (
    <>
      <div
        className="robotItemWrap"
        style={{
          left: `${(posX * 100) / 1920 - 1.562}vw`,
          top: `${(posY * 100) / 1920 - 1.562}vw`,
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
          <p>로봇ID{robotId}</p>

          <button onClick={handleReturn}>복귀</button>
          <button onClick={handleInit}>초기화</button>
        </CommonModal>
      )}
    </>
  );
};

export default RobotItem;
