import React, { useState } from 'react';
import LogDataType from './component/LogData/LogDataType/LogDataType';
import LogDataContents from './component/LogData/LogDataContents/LogDataContents';
import { useMutation } from 'react-query';
import {
  PostErrorLog,
  PostServingLog,
  PostRobotLog,
} from './component/LogDataController/LogDataController';
import './LogPresenter.scss';

const LogPresenter = () => {
  const [selectTab, setSelectTab] = useState('maps');
  const [mapId, setMapId] = useState(0);

  const onChangeMapIdHandler = e => {
    setMapId(parseInt(e.target.value));
  };

  const handleClickErrorData = (dates, mapId) => {
    errorLog.mutate(dates, mapId);
  };

  const handleClickServingData = (dates, mapId) => {
    servingLog.mutate(dates, mapId);
  };

  const handleClickRobotData = (dates, mapId) => {
    robotLog.mutate(dates, mapId);
  };

  const errorLog = useMutation(PostErrorLog, {
    onMutate: () => {},
    onSuccess: data => {
      let [err, result] = data;
      err && console.log(result);
    },
  });

  const servingLog = useMutation(PostServingLog, {
    onMutate: () => {},
    onSuccess: data => {
      let [err, result] = data;
      err && console.log(result);
    },
  });

  const robotLog = useMutation(PostRobotLog, {
    onMutate: () => {},
    onSuccess: data => {
      let [err, result] = data;
      err && console.log(result);
    },
  });

  const errorLogData = errorLog.data && errorLog.data[1].error_logs;
  const servingLogData = servingLog.data && servingLog.data[1].serving_log;
  const robotLogData = robotLog.data && robotLog.data[1].robot_log;

  return (
    <div className="logPresenter">
      <LogDataType
        setSelectTab={setSelectTab}
        handleClickErrorData={handleClickErrorData}
        handleClickServingData={handleClickServingData}
        handleClickRobotData={handleClickRobotData}
        onChangeMapIdHandler={onChangeMapIdHandler}
        mapId={mapId}
      />
      <LogDataContents
        selectTab={selectTab}
        errorLogData={errorLogData}
        servingLogData={servingLogData}
        robotLogData={robotLogData}
        mapId={mapId}
      />
    </div>
  );
};

export default LogPresenter;
