import React, { useState, useEffect } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import DayTab from './components/DayTab';
import MonthTab from './components/MonthTab';
import WeekTab from './components/WeekTab';
import './Header.scss';

const Header = () => {
  const [dateState, setDateState] = useState(new Date());
  const [currentTab, setCurrentTab] = useState('일간');
  const params = useParams();

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      setDateState(new Date());
    }, 1000);
    return () => clearInterval(timeUpdate);
  }, []);

  const MAPPING_OBJ = {
    일간: <DayTab params={params} />,
    주간: <WeekTab params={params} />,
    월간: <MonthTab params={params} />,
  };

  return (
    <div className="header">
      <div className="headerTop">
        <div className="innerHeader">
          <h1 className="logo">
            <img
              src="/images/hprobot-logo-white-1line.png"
              alt="헬퍼로보틱스 로고"
            />
          </h1>
          <p>Monitoring System</p>
          <div className="weatherWrap">
            <div className="dateWrap">
              <AiOutlineCalendar className="icon" />
              <p>
                {dateState.toLocaleDateString('ko-KR', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  weekday: 'short',
                })}
              </p>
            </div>
            <div className="timeWrap">
              <AiOutlineClockCircle className="icon" />
              <p>
                {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="tabMenu">
          <ul className="menuWrap">
            {MENU_TAB.map((tabname, idx) => (
              <li key={idx} onClick={() => setCurrentTab(tabname)}>
                {tabname}
              </li>
            ))}
          </ul>
        </div>
        <div className="robotInfoWrap">{MAPPING_OBJ[currentTab]}</div>
      </div>
    </div>
  );
};

export default Header;
const MENU_TAB = ['일간', '주간', '월간'];
