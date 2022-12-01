import React, { useEffect, useRef } from 'react';
import Category from 'component/Category/Category';
import './RobotList.scss';

const RobotList = ({
  robotData,
  params,
  searchParams,
  setSearchParams,
  sort,
}) => {
  const robotListRef = useRef(null);
  useEffect(() => {
    if (params.category !== 'all') {
      robotListRef.current.style.width = '24vw';
    } else {
      robotListRef.current.style.width = '100%';
    }
  }, [params]);
  const handleFilter = e => {
    searchParams.set('status', e.target.value);
    if (e.target.value === '') {
      searchParams.delete('status');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="robotList" ref={robotListRef}>
      <p>Robot</p>
      <div className="categoryWrap">
        <Category type="storeCategory" />
        <div className="filterBox">
          <select onChange={handleFilter} value={sort ? sort : ''}>
            <option value="">기본순</option>
            <option value="error">에러 로봇순</option>
            <option value="serving">서빙 로봇순</option>
            <option value="stay">대기 로봇순</option>
            <option value="repair">수리 로봇순</option>
          </select>
        </div>
      </div>

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
                <p>{robot.distance}km</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RobotList;
