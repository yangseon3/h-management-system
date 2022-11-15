import React from 'react';
import RobotKakaoData from './RobotKakaoData/RobotKakaoData';
import RobotKakaoMap from './RobotKakaoMap/RobotKakaoMap';
import './RobotLocation.scss';

const MainRobotLocation = () => {
  return (
    <div className="mainRobotLocatioin">
      <div className="mainRobotLocatioinKakaoData">
        <RobotKakaoData />
      </div>
      <div className="mainRobotLocatioinKakaoData">
        <RobotKakaoMap />
      </div>
    </div>
  );
};

export default MainRobotLocation;
