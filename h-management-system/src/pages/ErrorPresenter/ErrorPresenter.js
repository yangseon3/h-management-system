import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { getDefaultErrorlist, postErrorDate } from './ErrorController';
import ErrorListPresenter from './components/ErrorListPresenter/ErrorListPresenter';
import ErrorChartPresenter from './components/ErrorChartPresenter/ErrorChartPresenter';
import './ErrorPresenter.scss';

const ErrorPresenter = () => {
  let date = new Date();
  let year = date?.getFullYear().toString();
  let month = date?.getMonth();
  let day = date?.getDate();

  console.log(year, month, day);

  const [startDate, setStartDate] = useState(new Date(year, month, day - 7));
  const [endDate, setEndDate] = useState(new Date());
  const [getDefaultData, setGetDefaultData] = useState(true);

  console.log(startDate);

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

  return (
    <motion.div
      className="errorPresenter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ErrorListPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        defaultErrorList={getDefaultData ? defaultErrorList : dateErrorList}
        event={handleClickDateInfo}
      />
      <ErrorChartPresenter
        defaultErrorList={getDefaultData ? defaultErrorList : dateErrorList}
      />
    </motion.div>
  );
};

export default ErrorPresenter;
