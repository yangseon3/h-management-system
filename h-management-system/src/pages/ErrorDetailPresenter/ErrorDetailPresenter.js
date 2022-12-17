import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postErrorDate } from 'pages/ErrorPresenter/ErrorController';
import ErrorListPresenter from 'pages/ErrorPresenter/components/ErrorListPresenter/ErrorListPresenter';
import ErrorDetailDestination from './components/ErrorDetailDestination/ErrorDetailDestination';
import ErrorDetailInfo from './components/ErrorDetailInfo/ErrorDetailInfo';
import ErrorDetailRecentList from './components/ErrorDetailRecentList/ErrorDetailRecentList';
import ErrorDetailSolution from './components/ErrorDetailSolution/ErrorDetailSolution';
import ErrorDetailSolutionList from './components/ErrorDetailSolutionList/ErrorDetailSolutionList';
import './ErrorDetailPresenter.scss';
import { postErrorData } from './ErrorDetailController';

const ErrorDetailPresenter = () => {
  const { state } = useLocation();
  const [startDate, setStartDate] = useState(state.initialInfo.startDate);
  const [endDate, setEndDate] = useState(state.initialInfo.endDate);
  const [getDefaultData, setGetDefaultData] = useState(true);

  const fetchedDetailData = useMutation(postErrorData);

  const postDetailData = () => {
    fetchedDetailData.mutate(state.error);
  };

  useEffect(() => {
    postDetailData();
  }, [state.error]);

  const fetchedDateData = useMutation(postErrorDate, {
    onMutate: () => {
      setGetDefaultData(false);
    },
  });

  const handleClickDateInfo = dates => {
    fetchedDateData.mutate(dates);
  };

  const dateErrorList = fetchedDateData.data && fetchedDateData.data[1];

  const detailErrorData = fetchedDetailData.data && fetchedDetailData.data[1];

  const solutionData = detailErrorData && detailErrorData.error_content;
  const content = solutionData && solutionData.content;
  const manager = solutionData && solutionData.manager;

  return (
    <div className="errorDetailPresenter">
      <ErrorListPresenter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        defaultErrorList={getDefaultData ? state.errorList : dateErrorList}
        errorInfo={state.error}
        event={handleClickDateInfo}
        selectedMapId={state.error.map_id}
      />
      <div className="gridBox">
        <ErrorDetailInfo
          error={detailErrorData && detailErrorData.error_count}
        />
        <ErrorDetailRecentList
          error={detailErrorData && detailErrorData.error_list}
        />
        <ErrorDetailDestination
          error={detailErrorData && detailErrorData.error_info}
        />
        <ErrorDetailSolution
          manager={manager}
          content={content}
          errorInfo={state.error}
          postDetailData={postDetailData}
        />
        <ErrorDetailSolutionList
          error={detailErrorData && detailErrorData.error_solve_list}
        />
      </div>
    </div>
  );
};

export default ErrorDetailPresenter;
