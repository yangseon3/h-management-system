import React, { useEffect, useRef } from 'react';
import StoreDoughnut from '../StoreDoughnut/StoreDoughnut';
import StoreLine from '../StoreLine/StoreLine';
import './StoreInfo.scss';

const StoreInfo = ({ countData, robotData, params }) => {
  const storeInfoRef = useRef(null);
  useEffect(() => {
    if (params.category === 'all') {
      storeInfoRef.current.style.opacity = '0';
      storeInfoRef.current.style.width = '0';
      storeInfoRef.current.style.padding = '0';
    } else {
      storeInfoRef.current.style.opacity = '1';
      storeInfoRef.current.style.width = '65.5vw';
      storeInfoRef.current.style.padding = '1vw';
    }
  }, [params]);

  const totalRobots =
    robotData &&
    Number(robotData.error) +
      Number(robotData.serving) +
      Number(robotData.stay) +
      Number(robotData.refair);
  const availableRobots =
    robotData && Number(robotData.serving) + Number(robotData.stay);

  return (
    <div className="storeInfo" ref={storeInfoRef}>
      <div className="chartWrap">
        <StoreDoughnut
          totalRobots={totalRobots}
          availableRobots={availableRobots}
        />
        <StoreLine countData={countData} />
      </div>
      <div className="imgWrap">
        <img
          src={`/images/map/map-background-${params.category}-monitoring.png`}
          alt="매장맵 이미지"
        />
      </div>
    </div>
  );
};

export default StoreInfo;
