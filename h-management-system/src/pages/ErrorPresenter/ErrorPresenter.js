import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getDefaultErrorlist, postErrorDate } from './ErrorController';
import ErrorListPresenter from './components/ErrorListPresenter/ErrorListPresenter';
import ErrorChartPresenter from './components/ErrorChartPresenter/ErrorChartPresenter';
import './ErrorPresenter.scss';

const ErrorPresenter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [getDefaultData, setGetDefaultData] = useState(true);

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
  };

  const dateErrorList = postDateData.data && postDateData.data[1];

  console.log(defaultErrorList);

  return (
    <div className="errorPresenter">
      <ErrorListPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        defaultErrorList={defaultErrorList}
        event={handleClickDateInfo}
      />
      <ErrorChartPresenter defaultErrorList={defaultErrorList} />
    </div>
  );
};

export default ErrorPresenter;
