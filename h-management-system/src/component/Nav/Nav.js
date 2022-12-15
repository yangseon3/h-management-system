import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [tabname, setTabname] = useState('HOME');

  const navigate = useNavigate();

  const changeTabNameHandler = name => {
    setTabname(name);
  };

  return (
    <div className="mainTab">
      <div className="navContainer">
        <div className="profileWrap">
          <div className="imgWrap">
            <img src="/images/icons/mypage_icon.png" alt="유저아이콘" />
          </div>
        </div>
        <ul className="navWrap">
          {SIDE_TAB.map(({ id, name, icon, activeIcon, path }) =>
            tabname === name ? (
              <li
                className="activeTab"
                key={id}
                onClick={() => {
                  changeTabNameHandler(name);
                  navigate(path);
                }}
              >
                <div className="imgBox">
                  <img src={activeIcon} alt="탭아이콘" />
                </div>
                <p className="menuName">{name}</p>
              </li>
            ) : (
              <li
                className="tab"
                key={id}
                onClick={() => {
                  changeTabNameHandler(name);
                  navigate(path);
                }}
              >
                <div className="imgBox">
                  <img src={icon} alt="탭아이콘" />
                </div>
                <p className="menuName">{name}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

const SIDE_TAB = [
  {
    id: 1,
    name: 'HOME',
    icon: '/images/icons/home_menu_wh.png',
    activeIcon: '/images/icons/home_menu_bk.png',
    path: '/main',
  },
  {
    id: 2,
    name: '매장정보',
    icon: '/images/icons/store_menu_wh.png',
    activeIcon: '/images/icons/store_menu_bk.png',
    path: '/store/all',
  },
  {
    id: 3,
    name: '로봇',
    icon: '/images/icons/robot_menu_wh.png',
    activeIcon: '/images/icons/robot_menu_bk.png',
    path: '/robot/all',
  },
  {
    id: 4,
    name: '에러',
    icon: '/images/icons/error_menu_wh.png',
    activeIcon: '/images/icons/error_menu_bk.png',
    path: '/error',
  },
  {
    id: 5,
    name: '로그',
    icon: '/images/icons/log_menu_wh.png',
    activeIcon: '/images/icons/log_menu_bk.png',
    path: '/log',
  },
  {
    id: 6,
    name: '통계',
    icon: '/images/icons/chart_menu_wh.png',
    activeIcon: '/images/icons/chart_menu_bk.png',
    path: '/chart',
  },
];

export default Nav;
