import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import { useQueries, useMutation } from 'react-query';
import {
  AllError,
  PostDateError,
  ByTimeError,
  PostByTimeError,
} from './ErrorLogController';
import './ErrorLogPresenter.scss';

const ErrorLogPresenter = () => {
  //에러로그들 관리하는 state
  const [errLog, setErrLog] = useState([]);
  //시작날짜, 끝나는 날짜를 관리하는 state
  const [date, setDate] = useState({
    start_date: null,
    end_date: null,
  });
  //current_date 관리하는 state
  const [currentTime, setCurrentTime] = useState('');
  //enabled를 관리하는 state
  const [getAllData, setGetAllData] = useState(true);
  const [getCurrentData, setGetCurrentData] = useState(false);

  //현재시간 관리
  let now = new Date();
  let year = now.getFullYear().toString();
  let month = ('0' + (now.getMonth() + 1)).slice(-2);
  let day = ('0' + now.getDate()).slice(-2);
  let hours = ('0' + now.getHours()).slice(-2);
  let minutes = ('0' + now.getMinutes()).slice(-2);
  let seconds = ('0' + now.getSeconds()).slice(-2);

  //조합된 현재 시간 ex) 2022-10-26 10:00:00
  const joinedCurrentTime =
    year +
    '-' +
    month +
    '-' +
    day +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds;

  //쿼리 목록들
  const queries = [
    { queryKey: ['allError'], queryFn: AllError, enabled: getAllData },
    {
      queryKey: ['currentError', currentTime],
      queryFn: ByTimeError,
      enabled: getCurrentData,
    },
  ];

  //서버에서 받아오는 데이터
  const response = useQueries(
    queries.map(query => {
      return {
        queryKey: query.queryKey,
        queryFn: query.queryFn,
        enabled: query.enabled,
        onSuccess: data => {
          let [err, result] = data;
          if (!err) {
            result.error_notice.length === 0
              ? setErrLog([{ log_id: 0, error_msg: '검색 결과 0' }])
              : setErrLog(result.error_notice.reverse());
          } else {
            console.log(result);
          }
        },
        // refetchInterval: 1000,
      };
    })
  );

  //달력 설정 후 설정값을 서버로 보내는 함수
  const handleClickDateInfo = () => {
    postDateInfo.mutate(date);
  };

  const postDateInfo = useMutation(PostDateError, {
    onMutate: () => {
      setGetAllData(false);
      setGetCurrentData(false);
    },
    onSuccess: data => {
      let [err, result] = data;
      if (!err) {
        result.error_notice.length === 0
          ? setErrLog([{ log_id: 0, error_msg: '검색 결과 0' }])
          : setErrLog(result.error_notice.reverse());
      } else {
        console.log(result);
      }
    },
  });

  //시간 설정 후 시간값을 서버로 보내는 함수
  const handleClickTimeInfo = () => {
    postTimeInfo.mutate({ current_date: joinedCurrentTime });
  };

  const postTimeInfo = useMutation(PostByTimeError, {
    onMutate: () => {
      setGetAllData(false);
      setCurrentTime(year + month + day + hours + minutes + seconds);
    },
    onSuccess: () => {
      setGetCurrentData(true);
    },
  });

  return (
    <div className="errorLogPresenter">
      <div className="errorButtonBox">
        <button
          onClick={() => {
            setGetAllData(true);
            setGetCurrentData(false);
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            handleClickDateInfo();
          }}
        >
          date
        </button>
        <button
          onClick={() => {
            handleClickTimeInfo();
          }}
        >
          time
        </button>
      </div>
      <div className="errorLogBox">
        {errLog &&
          errLog.map(log => <div key={log.log_id}>{log.error_msg}</div>)}
      </div>
    </div>
  );
};

export default ErrorLogPresenter;
