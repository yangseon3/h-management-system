import React from 'react';
import ErrorStatus from './components/ErrorStatus/ErrorStatus';
import RobotLocation from './components/RobotLocation/RobotLocation';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <RobotLocation />
      <ErrorStatus />
    </div>
  );
};

export default Main;
