import React, { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineAppstore,
  AiOutlineRobot,
  AiOutlineDatabase,
} from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="mainTab">
      <div className="navContainer">
        <ul className="navWrap">
          {SIDE_TAB.map((tab, idx) => (
            <li key={idx} onClick={() => navigate(tab.path)}>
              {tab.icon}
              <span className="menuName">{tab.tabname}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
const SIDE_TAB = [
  { tabname: 'HOME', icon: <AiOutlineHome />, path: '/main' },
  { tabname: '매장정보', icon: <AiOutlineAppstore />, path: '/store/all' },
  { tabname: '로봇', icon: <AiOutlineRobot />, path: '/robot/all' },
  { tabname: '에러', icon: <BiError />, path: '/error' },
  { tabname: '로그', icon: <AiOutlineDatabase />, path: '/log' },
  { tabname: '통계', icon: <AiOutlineBarChart />, path: '/chart' },
];
