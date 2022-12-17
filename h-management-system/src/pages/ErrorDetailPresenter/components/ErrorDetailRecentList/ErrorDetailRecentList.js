import React from 'react';
import './ErrorDetailRecentList.scss';

const ErrorDetailRecentList = ({ error }) => {
  return (
    <div className="errorDetailRecentList">
      <div className="recentListContentsBox">
        <p className="titleText">해당 로봇의 최근 에러리스트</p>
        <div className="recentList">
          {error &&
            error.map(({ error_id, error_type, created_at }) => (
              <div className="recentItem" key={error_id}>
                <p className="itemText">error_id : {error_id}</p>
                <p className="itemText">error_type : {error_type}</p>
                <p className="itemText">created_at : {created_at}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ErrorDetailRecentList;
