import React from 'react';
import ErrorStatisticPresenter from './components/ErrorStatistic/ErrorStatisticPresenter';
import ErrorLogPresenter from './components/ErrorLogPresenter/ErrorLogPresenter';
import './ErrorStatus.scss';

const ErrorStatus = () => {
  return (
    <div className="errorStatus">
      <ErrorStatisticPresenter />
      <ErrorLogPresenter />
    </div>
  );
};

export default ErrorStatus;
