import React, { useEffect, useRef } from 'react';
import RobotItem from '../RobotItem/RobotItem';
import './RobotMap.scss';

const RobotMap = ({ robotData, params }) => {
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
        {params.category !== 'all' ? (
          <img
            src={`/images/map/map-background-${params.category}.png`}
            alt={params.category + '이미지'}
          />
        ) : null}

        {params.category !== 'all'
          ? robotData?.map((robot, idx) => (
              <RobotItem
                key={idx}
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
