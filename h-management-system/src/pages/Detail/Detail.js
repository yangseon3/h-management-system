import React from 'react';
import DetailAvailable from './components/DetailAvailable/DetailAvailable';
import DetailCarousel from './components/DetailCarousel/DetailCarousel';
import DetailChart from './components/DetailChart/DetailChart';
import DetailLogdata from './components/DetailLogdata/DetailLogdata';
import DetailRobotTrace from './components/DetailRobotTrace/DetailRobotTrace';
import DetailRobotValue from './components/DetailRobotValue/DetailRobotValue';
import './Detail.scss';

const Detail = () => {
  return (
    <div className="detail">
      <div className="detailLeft">
        <DetailCarousel />
        <DetailLogdata />
      </div>
      <div className="detailRight">
        <div className="chartWrap">
          <DetailAvailable />
          <DetailChart />
        </div>
        <DetailRobotTrace />
        <DetailRobotValue />
      </div>
    </div>
  );
};

export default Detail;
