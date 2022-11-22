import React, { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineAppstore,
  AiOutlineRobot,
  AiOutlineDatabase,
} from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import ChartPresenter from 'pages/Main/components/ChartPresenter/ChartPresenter';
import ErrorPresenter from 'pages/Main/components/ErrorPresenter/ErrorPresenter';
import LogPresenter from 'pages/Main/components/LogPresenter/LogPresenter';
import RobotPresenter from 'pages/Main/components/RobotPresenter/RobotPresenter';
import StorePresenter from 'pages/Main/components/StorePresenter/StorePresenter';
import Main from 'pages/Main/Main';

import './Nav.scss';

const Nav = () => {
  const [currentTab, setCurrentTab] = useState('HOME');
  const MAPPING_OBJ = {
    HOME: <Main />,
    매장정보: <StorePresenter />,
    로봇: <RobotPresenter />,
    에러: <ErrorPresenter />,
    로그: <LogPresenter />,
    통계: <ChartPresenter />,
  };
  return (
    <div className="mainTab">
      <div className="navContainer">
        <ul className="navWrap">
          {SIDE_TAB.map((tab, idx) => (
            <li key={idx} onClick={() => setCurrentTab(tab.tabname)}>
              {tab.icon}
              <span className="menuName">{tab.tabname}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="tabPageWrap">{MAPPING_OBJ[currentTab]}</div>
    </div>
  );
};

export default Nav;
const SIDE_TAB = [
  { tabname: 'HOME', icon: <AiOutlineHome /> },
  { tabname: '매장정보', icon: <AiOutlineAppstore /> },
  { tabname: '로봇', icon: <AiOutlineRobot /> },
  { tabname: '에러', icon: <BiError /> },
  { tabname: '로그', icon: <AiOutlineDatabase /> },
  { tabname: '통계', icon: <AiOutlineBarChart /> },
];
