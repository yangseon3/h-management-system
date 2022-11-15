import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTop">
        <div className="innerHeader">
          <div className="titleWrap">헬퍼로보틱스</div>
          <div className="weatherWrap">날씨 온도 습도</div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="tabMenu">
          <ul className="menuWrap">
            <li>서빙횟수</li>
            <li>서빙이동거리</li>
            <li>서빙평균시간</li>
            <li>서빙주행효율</li>
          </ul>
        </div>
        <div className="robotInfoWrap" />
      </div>
    </div>
  );
};

export default Header;
