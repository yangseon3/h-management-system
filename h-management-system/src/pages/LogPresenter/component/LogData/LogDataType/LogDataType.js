import React, { useState } from 'react';
import Category from 'component/Category/Category';
import ConvertStrYesterday from 'utils/ConvertStrYesterday';
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
    errorDataCount: '100',
    servingDataCount: '100',
    robotDataCount: '100',
    errorDate: ConvertStrYesterday(),
    servingDate: ConvertStrYesterday(),
    robotDate: ConvertStrYesterday(),
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
      <div className="LogDataWrapper">
        <div className="logDataCategoryWrapper">
          <Category type="logCategory" event={onChangeMapIdHandler} />
        </div>
        <div className="getLogData">
          <div
            className="logMaps"
            onClick={() => {
              setSelectTab('maps');
            }}
          >
            MAPS
          </div>
          <div
            className="logRobots"
            onClick={() => {
              setSelectTab('robots');
            }}
          >
            ROBOTS
          </div>
          <div
            className="logUsers"
            onClick={() => {
              setSelectTab('users');
            }}
          >
            USERS
          </div>
        </div>
        <div className="postLogData">
          <div className="logErrorWrapper">
            <div className="logsWrapper">
              <div>error_logs</div>
            </div>
            <div className="dateWrapper">
              <div className="logErrorDate">??????/??????</div>
              <div>
                <input
                  className="logDateTime"
                  type="datetime-local"
                  name="errorDate"
                  value={logData.errorDate}
                  onChange={logDataHandler}
                />
              </div>
            </div>
            <div className="logCountWrapper">
              <div className="logErrorCount">?????? ?????? ??????</div>
              <input
                className="logDataNumber"
                type="number"
                name="errorDataCount"
                value={logData.errorDataCount}
                step="10"
                placeholder="??????"
                min="0"
                max="1000"
                onChange={logDataHandler}
              />
            </div>
            <div className="logDataSubmitButton">
              <button
                className="submit"
                onClick={() => {
                  handleClickErrorData(errorLogRawData);
                  setSelectTab('error_logs');
                }}
              >
                ??????
              </button>
            </div>
          </div>
          <div className="logServingWrapper">
            <div className="logsWrapper">
              <div>serving_logs</div>
            </div>
            <div className="dateWrapper">
              <div className="logServingDate">??????/??????</div>
              <div>
                <input
                  className="logDateTime"
                  type="datetime-local"
                  name="servingDate"
                  value={logData.servingDate}
                  onChange={logDataHandler}
                />
              </div>
            </div>
            <div className="logCountWrapper">
              <div className="logServingCount">?????? ?????? ??????</div>
              <input
                className="logDataNumber"
                type="number"
                name="servingDataCount"
                step="10"
                value={logData.servingDataCount}
                placeholder="??????"
                min="0"
                max="1000"
                onChange={logDataHandler}
              />
            </div>
            <div className="logDataSubmitButton">
              <button
                className="submit"
                onClick={() => {
                  handleClickServingData(servingLogRawData);
                  setSelectTab('serving_logs');
                }}
              >
                ??????
              </button>
            </div>
          </div>
          <div className="logRobotWrapper">
            <div className="logsWrapper">
              <div>robot_logs</div>
            </div>
            <div className="dateWrapper">
              <div className="logRobotDate">??????/??????</div>
              <div>
                <input
                  className="logDateTime"
                  type="datetime-local"
                  name="robotDate"
                  value={logData.robotDate}
                  onChange={logDataHandler}
                />
              </div>
            </div>
            <div className="logCountWrapper">
              <div className="logRobotCount">?????? ?????? ??????</div>
              <input
                className="logDataNumber"
                type="number"
                name="robotDataCount"
                step="5"
                value={logData.robotDataCount}
                placeholder="??????"
                min="0"
                max="1000"
                onChange={logDataHandler}
              />
            </div>
            <div className="logDataSubmitButton">
              <button
                className="submit"
                onClick={() => {
                  handleClickRobotData(robotLogRawData);
                  setSelectTab('robot_logs');
                }}
              >
                ??????
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogDataType;
