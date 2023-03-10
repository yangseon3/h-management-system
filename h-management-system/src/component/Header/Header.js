import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { basicApi } from 'lib/config';
import TabContent from './components/TabContent';
import './Header.scss';
import CommonModal from 'component/Modal/CommonModal';

const Header = () => {
  const [dateState, setDateState] = useState(new Date());
  const [currentTab, setCurrentTab] = useState('일간');
  const [isModal, setIsModal] = useState(false);
  const params = useParams();
  const handleNextClick = () => {
    if (currentTab === '일간') {
      setCurrentTab('주간');
    } else if (currentTab === '주간') {
      setCurrentTab('월간');
    } else {
      setCurrentTab('일간');
    }
  };
  const handlePrevClick = () => {
    if (currentTab === '월간') {
      setCurrentTab('주간');
    } else if (currentTab === '주간') {
      setCurrentTab('일간');
    } else {
      setCurrentTab('월간');
    }
  };

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      setDateState(new Date());
    }, 1000);
    return () => clearInterval(timeUpdate);
  }, []);

  const { isLoading, data } = useQuery('HeaderKey', async () => {
    const { data } = await basicApi.get(process.env.REACT_APP_statistic);
    return data;
  });
  const resultData = data && data;

  const MAPPING_OBJ = {
    일간: (
      <TabContent
        before="전일"
        params={params}
        resultData={resultData}
        date="day"
      />
    ),
    주간: (
      <TabContent
        before="전주"
        params={params}
        resultData={resultData}
        date="week"
      />
    ),
    월간: (
      <TabContent
        before="전월"
        params={params}
        resultData={resultData}
        date="month"
      />
    ),
  };

  return (
    <div className="header">
      <div className="headerTop">
        <div className="innerHeader">
          <h1 className="logo">HMS</h1>
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
            <div className="userIcon" onClick={() => setIsModal(true)}>
              <div className="imgWrap">
                <img src="/images/icons/mypage_icon_sm.png" alt="유저아이콘" />
              </div>
              {isModal && (
                <CommonModal type="user" close={() => setIsModal(false)}>
                  <div className="imgWrap">
                    <img src="/images/icons/mypage_icon.png" alt="유저아이콘" />
                  </div>
                  <div className="userInfoWrap">
                    <p>닉네임</p>
                    <p>포지션</p>
                  </div>
                </CommonModal>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="robotInfoWrap">
          <div className="currentTabName">{currentTab}</div>
          <button className="arrowLeft" onClick={handlePrevClick}>
            <MdOutlineKeyboardArrowLeft />
            <p className="arrowName">
              {currentTab === '일간'
                ? '월'
                : MENU_TAB.map((tabname, idx) =>
                    tabname === currentTab[0] ? MENU_TAB[idx - 1] : ''
                  )}
            </p>
          </button>
          {!isLoading && MAPPING_OBJ[currentTab]}
          <button className="arrowRight" onClick={handleNextClick}>
            <p className="arrowName">
              {currentTab === '월간'
                ? '일'
                : MENU_TAB.map((tabname, idx) =>
                    tabname === currentTab[0] ? MENU_TAB[idx + 1] : ''
                  )}
            </p>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
const MENU_TAB = ['일', '주', '월'];
