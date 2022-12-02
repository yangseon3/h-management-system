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
    searchParams.set('state', e.target.value);
    if (e.target.value === '') {
      searchParams.delete('state');
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
            <option value="">전체로봇</option>
            <option value="1">서빙중</option>
            <option value="2">대기중</option>
            {/* <option value="3">에러</option>
            <option value="4">수리중</option> */}
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
