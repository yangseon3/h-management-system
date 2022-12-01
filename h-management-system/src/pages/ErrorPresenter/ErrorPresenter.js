import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getDefaultErrorlist, postErrorDate } from './ErrorController';
import ErrorListPresenter from './components/ErrorListPresenter/ErrorListPresenter';
import ErrorChartPresenter from './components/ErrorChartPresenter/ErrorChartPresenter';
import './ErrorPresenter.scss';
import ErrorDetailPresenter from './components/ErrorDetailPresenter/ErrorDetailPresenter';

const ErrorPresenter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [getDefaultData, setGetDefaultData] = useState(true);
  const [errorId, setErrorId] = useState(undefined);

  const defaults = useQuery(['defaultErrorList'], getDefaultErrorlist, {
    enabled: getDefaultData,
  });

  const defaultErrorList = defaults.data && defaults.data[1];

  const postDateData = useMutation(postErrorDate, {
    onMutate: () => {
      setGetDefaultData(false);
    },
  });

  const handleClickDateInfo = dates => {
    postDateData.mutate(dates);
    setErrorId(undefined);
  };

  const dateErrorList = postDateData.data && postDateData.data[1];

  return (
    <div className="errorPresenter">
      <ErrorListPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        defaultErrorList={getDefaultData ? defaultErrorList : dateErrorList}
        event={handleClickDateInfo}
        errorId={errorId}
        setErrorId={setErrorId}
      />
      {errorId === undefined ? (
        <ErrorChartPresenter
          defaultErrorList={getDefaultData ? defaultErrorList : dateErrorList}
        />
      ) : (
        <ErrorDetailPresenter />
      )}
    </div>
  );
};

export default ErrorPresenter;
