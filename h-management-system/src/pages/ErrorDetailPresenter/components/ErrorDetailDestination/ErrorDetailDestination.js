import React from 'react';
import './ErrorDetailDestination.scss';

const ErrorDetailDestination = ({ error }) => {
  const final = error && error.robot_path.split(',')[0].split('!')[0];
  const target = error && error.robot_path.split(',')[0].split('!')[1];

  return (
    <div className="errorDetailDestination">
      <div className="destinationContentsBox">
        <div className="textBox">
          <p className="titleText">최근 목적지</p>
          <p className="dataText">: {error && error.recent_table}번 테이블</p>
        </div>
        <div className="textBox">
          <p className="titleText">최근 배터리</p>
          <p className="dataText">: {error && error.battery}%</p>
        </div>
        <div className="textBox">
          <p className="titleText">최근 경로</p>
          <p className="dataText">: {error && error.robot_path}</p>
        </div>
        <div className="textBox">
          <p className="titleText">최근 Final, Target</p>
          <p className="dataText">
            : {final}번 , {target}번
          </p>
        </div>
        <div className="textBox">
          <p className="titleText">Map 상황</p>
        </div>
        <div className="mapTextBox">
          <p className="dataText">{error && error.map_existence}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDetailDestination;
