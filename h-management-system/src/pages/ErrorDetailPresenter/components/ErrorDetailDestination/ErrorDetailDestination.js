import React from 'react';
import './ErrorDetailDestination.scss';

const ErrorDetailDestination = ({ error }) => {
  const final = error && error.robot_path.split(',')[0].split('!')[0];
  const target = error && error.robot_path.split(',')[0].split('!')[1];

  return (
    <div className="errorDetailDestination">
      <div className="destinationContentsBox">
        <p className="titleText">
          최근 목적지
          <span className="dataText">
            {error && error.recent_table}번 테이블
          </span>
        </p>
        <p className="titleText">
          최근 배터리
          <span className="dataText">{error && error.battery}%</span>
        </p>
        <p className="titleText">
          최근 경로
          <span className="dataText">{error && error.robot_path}</span>
        </p>
        <p className="titleText">
          최근 Final, Target
          <span className="dataText">
            {final}번 , {target}번
          </span>
        </p>
        <p className="titleText">Map 상황</p>
        <p>{error && error.map_existence}</p>
      </div>
    </div>
  );
};

export default ErrorDetailDestination;
