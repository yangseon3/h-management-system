import React from 'react';
import MainErrorStatus from './components/MainErrorStatus/MainErrorStatus';
import MainRobotLocation from './components/MainRobotLocation/MainRobotLocation';
import './MainPresenter.scss';

const MainPresenter = () => {
  return (
    <div className="main">
      <MainRobotLocation />
      <MainErrorStatus />
    </div>
  );
};

export default MainPresenter;
