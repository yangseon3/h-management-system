import React, { useEffect, useRef } from 'react';
import Category from 'component/Category/Category';
import './RobotList.scss';

const RobotList = ({ robotData, params }) => {
  const robotListRef = useRef(null);
  useEffect(() => {
    if (params.category === 'all') {
      robotListRef.current.style.width = '100%';
    } else {
      robotListRef.current.style.width = '24vw';
    }
  }, [params]);

  return (
    <div className="robotList" ref={robotListRef}>
      <p>Robot</p>
      <Category />
      <ul className="listWrap">
        {robotData.map((robot, idx) => (
          <li key={idx}>
            <p className="robotTitle">
              {robot.map_name}_{robot.robot_id}
              <span className="robotState">{robot.state}</span>
            </p>
            <div className="robotBattery">
              <span className="charge" style={{ width: `${robot.battery}%` }} />
            </div>
            <div className="robotInfo">
              <div>
                <p>서빙횟수</p>
                <p>이동거리</p>
              </div>
              <div>
                <p>{robot.serving_count}회</p>
                <p>{robot.move_distance}km</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RobotList;
