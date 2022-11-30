import React, { useState } from 'react';
import Calendar from 'component/Calendar/Calendar';
import './ErrorListPresenter.scss';
import { useNavigate } from 'react-router-dom';

const ErrorListPresenter = ({
  event,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  defaultErrorList,
  errorId,
}) => {
  const navigate = useNavigate();
  return (
    <div className="errorListPresenter">
      <p className="errorListTitle">Error</p>
      <Calendar
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        event={event}
      />
      <div className="errorListBox">
        {defaultErrorList &&
          defaultErrorList.error_notice?.map(
            ({ error_id, error_msg, current_node, robot_id, created_at }) => (
              <div
                className={
                  errorId === error_id ? 'checkedErrorList' : 'errorList'
                }
                key={error_id}
                onClick={() => {
                  navigate(`/errorDetail/${error_id}`, {
                    state: { start_date: startDate, end_date: endDate },
                  });
                }}
              >
                <p>error_msg : {error_msg}</p>
                <p>current_node {current_node}:</p>
                <p>robot_id : {robot_id}</p>
                <p>created_at : {created_at}</p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default ErrorListPresenter;
