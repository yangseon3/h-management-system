import React, { useState } from 'react';
import Category from 'component/Category/Category';
import './LogDataType.scss';

const LogDataType = props => {
  const {
    setSelectTab,
    handleClickErrorData,
    handleClickServingData,
    handleClickRobotData,
    onChangeMapIdHandler,
    mapId,
  } = props;

  const [logData, setLogData] = useState({
    errorDataCount: '',
    servingDataCount: '',
    robotDataCount: '',
    errorDate: '',
    servingDate: '',
    robotDate: '',
  });

  const logDataHandler = e => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  const {
    errorDataCount,
    servingDataCount,
    robotDataCount,
    errorDate,
    servingDate,
    robotDate,
  } = logData;

  const errorLogRawData = {
    start_date: errorDate,
    log_number: parseInt(errorDataCount),
    mapId,
  };
  const servingLogRawData = {
    start_date: servingDate,
    log_number: parseInt(servingDataCount),
    mapId,
  };
  const robotLogRawData = {
    start_date: robotDate,
    log_number: parseInt(robotDataCount),
    mapId,
  };

  return (
    <div className="logDataType">
      <div className="logHeaderWrapper">
        <div className="logHeader">log</div>
        <Category type="logCategory" event={onChangeMapIdHandler} />
      </div>
      <div
        className="logMaps"
        onClick={() => {
          setSelectTab('maps');
        }}
      >
        maps
      </div>
      <div
        className="logRobots"
        onClick={() => {
          setSelectTab('robots');
        }}
      >
        robots
      </div>
      <div
        className="logUsers"
        onClick={() => {
          setSelectTab('users');
        }}
      >
        users
      </div>
      <div className="logErrorWrapper">
        <div className="logsWrapper">
          <div>error_logs</div>
          <button
            className="Submit"
            onClick={() => {
              handleClickErrorData(errorLogRawData);
              setSelectTab('error_logs');
            }}
          >
            제출
          </button>
        </div>
        <div className="dateWrapper">
          <div className="logErrorDate">날짜/시간</div>
          <div>
            <input
              type="datetime-local"
              name="errorDate"
              onChange={logDataHandler}
            />
          </div>
        </div>
        <div className="logCountWrapper">
          <div className="logErrorCount">이후 로그 개수</div>
          <input
            type="number"
            name="errorDataCount"
            step="5"
            placeholder="수량"
            min="0"
            max="1000"
            onChange={logDataHandler}
          />
        </div>
      </div>
      <div className="logServingWrapper">
        <div className="logsWrapper">
          <div>serving_logs</div>
          <button
            className="Submit"
            onClick={() => {
              handleClickServingData(servingLogRawData);
              setSelectTab('serving_logs');
            }}
          >
            제출
          </button>
        </div>
        <div className="dateWrapper">
          <div className="logServingDate">날짜/시간</div>
          <div>
            <input
              type="datetime-local"
              name="servingDate"
              onChange={logDataHandler}
            />
          </div>
        </div>
        <div className="logCountWrapper">
          <div className="logServingCount">이후 로그 개수</div>
          <input
            type="number"
            name="servingDataCount"
            step="5"
            placeholder="수량"
            min="0"
            max="1000"
            onChange={logDataHandler}
          />
        </div>
      </div>
      <div className="logRobotWrapper">
        <div className="logsWrapper">
          <div>robot_logs</div>
          <button
            className="Submit"
            onClick={() => {
              handleClickRobotData(robotLogRawData);
              setSelectTab('robot_logs');
            }}
          >
            제출
          </button>
        </div>
        <div className="dateWrapper">
          <div className="logRobotDate">날짜/시간</div>
          <div>
            <input
              type="datetime-local"
              name="robotDate"
              onChange={logDataHandler}
            />
          </div>
        </div>
        <div className="logCountWrapper">
          <div className="logRobotCount">이후 로그 개수</div>
          <input
            type="number"
            name="robotDataCount"
            step="5"
            placeholder="수량"
            min="0"
            max="1000"
            onChange={logDataHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default LogDataType;
