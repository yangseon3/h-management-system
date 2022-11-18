import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { basicApi } from 'lib/config';
import API from 'api';
import TabContent from './components/TabContent';
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

  const { isLoading, data } = useQuery('HeaderKey', async () => {
    const { data } = await basicApi.get(API.statistic);
    return data;
  });

  const resultData = data && data;

  const MAPPING_OBJ = {
    일간: (
      <TabContent
        before="전일"
        params={params}
        resultData={resultData}
        category="day"
      />
    ),
    주간: (
      <TabContent
        before="전주"
        params={params}
        resultData={resultData}
        category="week"
      />
    ),
    월간: (
      <TabContent
        before="전월"
        params={params}
        resultData={resultData}
        category="month"
      />
    ),
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
        <div className="robotInfoWrap">
          {!isLoading && MAPPING_OBJ[currentTab]}
        </div>
      </div>
    </div>
  );
};

export default Header;
const MENU_TAB = ['일간', '주간', '월간'];
