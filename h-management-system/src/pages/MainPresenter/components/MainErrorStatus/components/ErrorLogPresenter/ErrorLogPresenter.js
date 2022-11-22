import React, { useState } from 'react';
import { useQueries, useMutation } from 'react-query';
import {
  AllError,
  PostDateError,
  ByTimeError,
  PostByTimeError,
} from './ErrorLogController';
import Calendar from 'component/Calendar/Calendar';
import ConvertCurTime from 'utils/ConvertCurTime';
import ConvertStrCurTime from 'utils/ConvertStrCurTime';
import './ErrorLogPresenter.scss';

const ErrorLogPresenter = () => {
  //시작날짜, 끝나는 날짜를 관리하는 state
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //current_date 관리하는 state
  const [currentTime, setCurrentTime] = useState('');
  //enabled를 관리하는 state
  const [getAllData, setGetAllData] = useState(true);
  const [getCurrentData, setGetCurrentData] = useState(false);

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
        // refetchInterval: 1000,
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
      <div>
        <Calendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          event={handleClickDateInfo}
        />
      </div>
      <div className="errorButtonBox">
        <button
          style={{ width: '100px' }}
          onClick={() => {
            setGetAllData(true);
            setGetCurrentData(false);
          }}
        >
          all
        </button>
        <button
          style={{ width: '100px' }}
          onClick={() => {
            handleClickTimeInfo();
          }}
        >
          time
        </button>
      </div>
      <div className="errorLogBox">
        {getAllData &&
          allData?.error_notice.map(err => (
            <p key={err.log_id}> {err.error_msg} </p>
          ))}
        {getCurrentData === false &&
          getAllData === false &&
          dateData?.error_notice.map(err => (
            <p key={err.log_id}> {err.error_msg} </p>
          ))}
        {getCurrentData &&
          currentData?.error_notice.map(err => (
            <p key={err.log_id}>{err.error_msg}</p>
          ))}
      </div>
    </div>
  );
};

export default ErrorLogPresenter;
