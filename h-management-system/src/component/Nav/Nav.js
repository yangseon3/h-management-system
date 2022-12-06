import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.split('/')[1];

  return (
    <div className="mainTab">
      <div className="navContainer">
        <div className="profileWrap">
          <FaUserCircle className="profileIcon" />
        </div>
        <ul className="navWrap">
          {SIDE_TAB.map((tab, idx) => (
            <li
              key={idx}
              onClick={() => navigate(tab.path)}
              style={{
                backgroundColor:
                  page === tab.path.split('/')[1] ? '#fff' : 'transparent',
                color: page === tab.path.split('/')[1] ? '#000' : '#fff',
              }}
            >
              <div className="imgBox">
                <img
                  src={
                    tab.icon +
                    (page === tab.path.split('/')[1] ? 'bk' : 'wh') +
                    '.png'
                  }
                  alt={tab.tabname}
                />
              </div>
              <p className="menuName">{tab.tabname}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
const SIDE_TAB = [
  { tabname: 'HOME', icon: '/images/icons/home_menu_', path: '/main' },
  {
    tabname: '매장정보',
    icon: '/images/icons/store_menu_',
    path: '/store/all',
  },
  { tabname: '로봇', icon: '/images/icons/robot_menu_', path: '/robot/all' },
  { tabname: '에러', icon: '/images/icons/error_menu_', path: '/error' },
  { tabname: '로그', icon: '/images/icons/log_menu_', path: '/log' },
  { tabname: '통계', icon: '/images/icons/chart_menu_', path: '/chart' },
];
