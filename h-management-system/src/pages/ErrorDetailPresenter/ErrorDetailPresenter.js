import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDefaultErrorlist } from 'pages/ErrorPresenter/ErrorController';
import ErrorListPresenter from 'pages/ErrorPresenter/components/ErrorListPresenter/ErrorListPresenter';
import ErrorDetailContents from './components/ErrorDetailContents/ErrorDetailContents';
import './ErrorDetailPresenter.scss';

const ErrorDetailPresenter = () => {
  const { state } = useLocation();

  const [startDate, setStartDate] = useState(state.start_date);
  const [endDate, setEndDate] = useState(state.end_date);
  const [getDefaultData, setGetDefaultData] = useState(true);

  const { errorId } = useParams();

  const defaults = useQuery(['defaultError'], getDefaultErrorlist, {
    enabled: getDefaultData,
  });

  const defaultErrorList = defaults.data && defaults.data[1];

  console.log(defaultErrorList);

  return (
    <div className="errorDetailPresenter">
      <ErrorListPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        defaultErrorList={defaultErrorList}
        errorId={errorId}
      />
      <ErrorDetailContents />
    </div>
  );
};

export default ErrorDetailPresenter;
