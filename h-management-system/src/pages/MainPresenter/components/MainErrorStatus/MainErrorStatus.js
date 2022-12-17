import React from 'react';
import ErrorStatisticPresenter from './components/ErrorStatistic/ErrorStatisticPresenter';
import ErrorLogPresenter from './components/ErrorLogPresenter/ErrorLogPresenter';
import './MainErrorStatus.scss';

const MainErrorStatus = () => {
  return (
    <div className="errorStatus">
      <ErrorStatisticPresenter />
      <ErrorLogPresenter />
    </div>
  );
};

export default MainErrorStatus;
