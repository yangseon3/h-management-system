import React from 'react';
import './LogDataContents.scss';
import Maps from './LogObjcect/Maps/Maps';
import Robots from './LogObjcect/Robots/Robots';
import Users from './LogObjcect/Users/Users';
import ErrorLogs from './LogObjcect/ErrorLogs/ErrorLogs';
import ServingLogs from './LogObjcect/ServingLogs/ServingLogs';
import RobotLogs from './LogObjcect/RobotLogs/RobotLogs';

const LogDataContents = props => {
  const { selectTab, errorLogData, servingLogData, robotLogData, mapId } =
    props;

  const MAPPING_OBJ = {
    maps: <Maps mapId={mapId} />,
    robots: <Robots mapId={mapId} />,
    users: <Users mapId={mapId} />,
    error_logs: <ErrorLogs errorLogData={errorLogData} />,
    serving_logs: <ServingLogs servingLogData={servingLogData} />,
    robot_logs: <RobotLogs robotLogData={robotLogData} />,
  };
  return (
    <div className="logDataContents">
      <div>{MAPPING_OBJ[selectTab]}</div>
    </div>
  );
};

export default LogDataContents;
