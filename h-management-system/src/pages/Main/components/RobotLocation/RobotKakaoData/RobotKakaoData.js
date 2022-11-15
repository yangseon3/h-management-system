import React from 'react';
import './RobotKakaoData.scss';

const RobotKakaoData = () => {
  return (
    <div className="kakaoDataContainer">
      <div className="kakaoDataImpo">
        <div className="kakaoDataImpoContent">모든 매장모아보기</div>
        <div className="kakaoDataImpoWrapper">
          <div className="kakaoDataCookGauge">
            <div className="kakaoDataBranchName">노리 배달쿡</div>
            <div className="kakaoDataStatusDisplay">
              <div>🔴에러 🟢서빙중 🔵대기중 ⚫️수리중</div>
              <input type="range" className="kakaoDataGauge" />
            </div>
          </div>
          <div className="kakaoDataServing">
            <div className="kakaoDataServingNumber">서빙횟수</div>
            <div className="kakaoDataErrorNumber">에러횟수</div>
            <div className="kakaoDataDrivingEfficiency">주행효율</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotKakaoData;
