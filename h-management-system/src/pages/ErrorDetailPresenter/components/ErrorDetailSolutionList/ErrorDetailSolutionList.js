import React from 'react';
import './ErrorDetailSolutionList.scss';

const ErrorDetailSolutionList = ({ error }) => {
  return (
    <div className="errorDetailSolutionList">
      <div className="solutionListContentsBox">
        <p className="titleText">
          해당 에러에 대한 다른 에러들의 해결방법 리스트
        </p>
        <div className="solutionList">
          {error &&
            error.map(({ manager, content, error_id }) => (
              <div className="solutionItem" key={error_id}>
                <p className="itemText">담당자 : {manager}</p>
                <p className="itemText">해결 내용 : {content}</p>
                <p className="itemText">해당 에러 아이디 : {error_id}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ErrorDetailSolutionList;
