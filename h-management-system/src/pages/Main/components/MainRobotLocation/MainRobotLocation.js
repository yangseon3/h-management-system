import React from 'react';
import RobotKakaoData from '../RobotLocation/RobotKakaoData/RobotKakaoData';
import RobotKakaoMap from '../RobotLocation/RobotKakaoMap/RobotKakaoMap';
import './MainRobotLocation.scss';

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
