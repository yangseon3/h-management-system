import React from 'react';
import './RobotKakaoMap.scss';
import Kakao from './Kakao';

const RobotKakaoMap = () => {
  return (
    <div className="RobotKakaoMap">
      <div className="RobotKakaoMapHeader">전국 매장 위치</div>
      <div className="mapWrap">
        <Kakao />
      </div>
    </div>
  );
};

export default RobotKakaoMap;
