import React from 'react';
import MainErrorStatus from './components/MainErrorStatus/MainErrorStatus';
import MainRobotLocation from './components/MainRobotLocation/MainRobotLocation';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <MainRobotLocation />
      <MainErrorStatus />
    </div>
  );
};

export default Main;
