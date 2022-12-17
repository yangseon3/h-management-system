import React, { useEffect, useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
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
  const displayRef = useRef(null);
  useEffect(() => {
    if (params.category !== 'all') {
      robotListRef.current.style.width = '22vw';
      robotListRef.current.style.height = '76.228vh';
      robotListRef.current.style.overflowY = 'scroll';
      displayRef.current.style.gridTemplateColumns = 'repeat(1, 1fr)';
    } else {
      robotListRef.current.style.width = '100%';
      robotListRef.current.style.height = '100%';
      robotListRef.current.style.overflowY = 'hidden';
      displayRef.current.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
  }, [params]);

  const handleStateText = state => {
    if (state === '1') {
      return '이동중';
    } else if (state === '2') {
      return '대기중';
    } else if (state === '3') {
      return '에러';
    } else if (state === '4') {
      return '수리중';
    } else {
      return '정보없음';
    }
  };
  const handleColor = state => {
    if (state === '1') {
      return '#299D38';
    } else if (state === '2') {
      return '#D9AC37';
    } else if (state === '3') {
      return '#DA376E';
    } else if (state === '4') {
      return '#406DFA';
    } else {
      return '#000';
    }
  };

  const handleFilter = e => {
    searchParams.set('state', e.target.value);
    if (e.target.value === '') {
      searchParams.delete('state');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="robotList" ref={robotListRef}>
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
          <IoMdArrowDropdown className="selectIcon" />
        </div>
      </div>

      <ul className="listWrap" ref={displayRef}>
        {robotData?.map((robot, idx) => (
          <li key={idx}>
            <div className="infoWrap">
              <div>
                <p className="robotTitle">{robot.k_map_name}</p>
                <div className="robotInfo">
                  <div className="subTitle">
                    <p>서빙횟수</p>
                    <p>이동q거리</p>
                  </div>
                  <div>
                    <p>{robot.serving_count}회</p>
                    <p>{robot.distance}km</p>
                  </div>
                </div>
              </div>
              <div className="iconWrap">
                <p style={{ color: `${handleColor(robot.state)}` }}>
                  {handleStateText(robot.state)}
                </p>
                <div className="robotIcon">
                  {robot.state && (
                    <img
                      src={`/images/robot/robot_state_${robot.state}.png`}
                      alt="로봇이미지"
                    />
                  )}

                  <p>No. {robot.robot_id}</p>
                  <p
                    className="arrowIcon"
                    style={{ color: `${handleColor(robot.state)}` }}
                  >
                    &gt;&gt;&gt;
                  </p>
                </div>
              </div>
            </div>
            <div className="batteryWrap">
              <div className="robotBattery">
                <span
                  className="charge"
                  style={{ width: `${robot.battery > 0 ? robot.battery : 0}%` }}
                />
              </div>
              <p>{robot.battery}%</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RobotList;
