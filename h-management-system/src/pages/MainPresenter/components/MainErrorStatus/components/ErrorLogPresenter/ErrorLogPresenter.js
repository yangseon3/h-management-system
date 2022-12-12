import React, { useRef, useState, useEffect } from 'react';
import { useQueries, useMutation } from 'react-query';
import {
  AllError,
  PostDateError,
  ByTimeError,
  PostByTimeError,
} from './ErrorLogController';
import Button from 'component/Button/Button';
import Calendar from 'component/Calendar/Calendar';
import ConvertCurTime from 'utils/ConvertCurTime';
import ConvertStrCurTime from 'utils/ConvertStrCurTime';
import './ErrorLogPresenter.scss';
import { useNavigate } from 'react-router-dom';

const ErrorLogPresenter = () => {
  //시작날짜, 끝나는 날짜를 관리하는 state
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //current_date 관리하는 state
  const [currentTime, setCurrentTime] = useState('');
  //enabled를 관리하는 state
  const [getAllData, setGetAllData] = useState(true);
  const [getCurrentData, setGetCurrentData] = useState(false);

  const navigate = useNavigate();

  //쿼리 목록들
  const QUERIES = [
    { queryKey: ['allError'], queryFn: AllError, enabled: getAllData },
    {
      queryKey: ['currentError', currentTime],
      queryFn: ByTimeError,
      enabled: getCurrentData,
    },
  ];

  //서버에서 받아오는 데이터
  const response = useQueries(
    QUERIES.map(query => {
      return {
        queryKey: query.queryKey,
        queryFn: query.queryFn,
        enabled: query.enabled,
        onSuccess: data => {
          let [err, result] = data;
          err && console.log(result);
        },
        refetchInterval: 1000,
      };
    })
  );

  //달력 설정 후 설정값을 서버로 보내는 함수
  const handleClickDateInfo = dates => {
    setGetAllData(false);
    setGetCurrentData(false);
    postDateInfo.mutate(dates);
  };

  const postDateInfo = useMutation(PostDateError, {
    onMutate: () => {},
    onSuccess: data => {
      let [err, result] = data;
      err && console.log(result);
    },
  });

  //시간 설정 후 시간값을 서버로 보내는 함수
  const handleClickTimeInfo = () => {
    setGetAllData(false);
    postTimeInfo.mutate({ current_date: ConvertStrCurTime() });
  };

  const postTimeInfo = useMutation(PostByTimeError, {
    onMutate: () => {
      setGetCurrentData(false);
      setCurrentTime(ConvertCurTime());
    },
    onSuccess: () => {
      setGetCurrentData(true);
    },
  });

  const [all, current] = response;
  //모든 오류들
  const allData = all.data && all.data[1];
  //현재 시간부터 발생하는 오류들
  const currentData = current.data && current.data[1];
  //기간별 오류들
  const dateData = postDateInfo.data && postDateInfo.data[1];

  return (
    <div className="errorLogPresenter">
      <div className="logHeader">에러 알림</div>
      <div className="logControllBox">
        <Calendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          event={handleClickDateInfo}
        />
        <div className="errorButtonBox">
          <button className="styleBtn" />
          <Button
            type="subBtn"
            text="ALL"
            event={() => {
              setGetAllData(true);
              setGetCurrentData(false);
            }}
          />
          <Button type="primaryBtn" text="초기화" event={handleClickTimeInfo} />
        </div>
      </div>
      <div className="errorLogBox">
        {getAllData &&
          allData?.error_notice.map(
            ({
              risk_degree,
              error_msg,
              k_map_name,
              format_date,
              error_id,
              robot_id,
              created_at,
              map_id,
              error_type,
            }) => (
              <div className="errorLog" key={error_id}>
                <div
                  className="logColorBox"
                  style={{ background: DEGREE_COLOR[risk_degree] }}
                />
                <div className="logDate">
                  <p className="logDay">{format_date.split(' ')[0]}</p>
                  <p className="logTime">
                    {format_date.split(' ')[1] + format_date.split(' ')[2]}
                  </p>
                </div>
                <div
                  className="logInfo"
                  onClick={() => {
                    navigate(`/errorDetail/${error_id}`, {
                      state: {
                        initialInfo: {
                          map_id,
                          startDate: new Date(created_at.split(' ')[0]),
                          endDate: new Date(created_at.split(' ')[0]),
                        },
                        error: {
                          robot_id,
                          created_at,
                          map_id,
                          error_type,
                          error_id,
                        },
                        errorList: allData,
                      },
                    });
                  }}
                >
                  <p className="logMsg">{error_msg}</p>
                  <p className="logStore">{k_map_name}</p>
                  <div className="logDegreeBox">
                    <div
                      className="logColorBox"
                      style={{ background: DEGREE_COLOR[risk_degree] }}
                    />
                    <p className="logType">{DEGREE_TYPE[risk_degree]}</p>
                  </div>
                </div>
              </div>
            )
          )}
        {getCurrentData === false &&
          getAllData === false &&
          dateData?.error_notice.map(
            ({
              risk_degree,
              error_msg,
              k_map_name,
              format_date,
              error_id,
              robot_id,
              created_at,
              map_id,
              error_type,
            }) => (
              <div className="errorLog" key={error_id}>
                <div
                  className="logColorBox"
                  style={{ background: DEGREE_COLOR[risk_degree] }}
                />
                <div className="logDate">
                  <p className="logDay">{format_date.split(' ')[0]}</p>
                  <p className="logTime">
                    {format_date.split(' ')[1] + format_date.split(' ')[2]}
                  </p>
                </div>
                <div
                  className="logInfo"
                  onClick={() => {
                    navigate(`/errorDetail/${error_id}`, {
                      state: {
                        initialInfo: {
                          map_id,
                          startDate: new Date(created_at.split(' ')[0]),
                          endDate: new Date(created_at.split(' ')[0]),
                        },
                        error: {
                          robot_id,
                          created_at,
                          map_id,
                          error_type,
                          error_id,
                        },
                        errorList: dateData,
                      },
                    });
                  }}
                >
                  <p className="logMsg">{error_msg}</p>
                  <p className="logStore">{k_map_name}</p>
                  <div className="logDegreeBox">
                    <div
                      className="logColorBox"
                      style={{ background: DEGREE_COLOR[risk_degree] }}
                    />
                    <p className="logType">{DEGREE_TYPE[risk_degree]}</p>
                  </div>
                </div>
              </div>
            )
          )}
        {getCurrentData &&
          currentData?.error_notice.map(
            ({
              risk_degree,
              error_msg,
              k_map_name,
              format_date,
              error_id,
              robot_id,
              created_at,
              map_id,
              error_type,
            }) => (
              <div className="errorLog" key={error_id}>
                <div
                  className="logColorBox"
                  style={{ background: DEGREE_COLOR[risk_degree] }}
                />
                <div className="logDate">
                  <p className="logDay">{format_date.split(' ')[0]}</p>
                  <p className="logTime">
                    {format_date.split(' ')[1] + format_date.split(' ')[2]}
                  </p>
                </div>
                <div
                  className="logInfo"
                  onClick={() => {
                    navigate(`/errorDetail/${error_id}`, {
                      state: {
                        initialInfo: {
                          map_id,
                          startDate: new Date(created_at.split(' ')[0]),
                          endDate: new Date(created_at.split(' ')[0]),
                        },
                        error: {
                          robot_id,
                          created_at,
                          map_id,
                          error_type,
                          error_id,
                        },
                        errorList: currentData,
                      },
                    });
                  }}
                >
                  <p className="logMsg">{error_msg}</p>
                  <p className="logStore">{k_map_name}</p>
                  <div className="logDegreeBox">
                    <div
                      className="logColorBox"
                      style={{ background: DEGREE_COLOR[risk_degree] }}
                    />
                    <p className="logType">{DEGREE_TYPE[risk_degree]}</p>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

const DEGREE_COLOR = {
  critical: '#d9376d',
  major: '#406dfa',
  minor: '#299d38',
};
const DEGREE_TYPE = { critical: 'CRITICAL', major: 'MAJOR', minor: 'MINOR' };

export default ErrorLogPresenter;
