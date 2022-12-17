import React from 'react';
import './ErrorDetailInfo.scss';

const ErrorDetailInfo = ({ error }) => {
  return (
    <div className="errorDetailInfo">
      <div className="infoContentsBox">
        <p className="titleText">해당 로봇의 에러 정보 </p>
        <p className="contentsText">
          최근 일주일 에러횟수 : {error && error.week_error_count}번
        </p>
        <p className="contentsText">
          최근 일주일 서빙횟수 : {error && error.week_serving_count}번
        </p>
        <p className="contentsText">
          최근 한 달 에러횟수 : {error && error.month_error_count}번
        </p>
        <p className="contentsText">
          최근 한 달 서빙횟수 : {error && error.month_serving_count}번
        </p>
      </div>
    </div>
  );
};

export default ErrorDetailInfo;
