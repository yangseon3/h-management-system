import React, { useEffect, useRef } from 'react';
import RobotItem from '../RobotItem/RobotItem';
import './RobotMap.scss';

const RobotMap = ({ robotData, params }) => {
  const mapImg = `/images/map/map-background-${robotData[0].map_id}.png`;
  const robotMapRef = useRef(null);
  useEffect(() => {
    if (params.category === 'all') {
      robotMapRef.current.style.opacity = '0';
      robotMapRef.current.style.width = '0';
      robotMapRef.current.style.padding = '0';
    } else {
      robotMapRef.current.style.opacity = '1';
      robotMapRef.current.style.width = '65.5vw';
      robotMapRef.current.style.padding = '1vw';
    }
  }, [params]);

  return (
    <div className="robotMap" ref={robotMapRef}>
      <div className="imgWrap">
        <img src={mapImg} alt={robotData[0].map_id + '이미지'} />
        {params.category !== 'all'
          ? robotData.map(robot => (
              <RobotItem
                key={robot.robot_id}
                posX={robot.x_pos}
                posY={robot.y_pos}
                robot_id={robot.robot_id}
                data={robot}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default RobotMap;
