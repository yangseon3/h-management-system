import React from 'react';
import LineBarChart from '../LineBarChart/LineBarChart';
import CountChart from '../DoughnutChart/DoughnutChart';
import './ErrorChartPresenter.scss';

const ErrorChartPresenter = ({ defaultErrorList }) => {
  const doughnutChart = [
    {
      id: 0,
      errorTitle: '에러 종류',
      error: defaultErrorList && defaultErrorList.error_count,
    },
    {
      id: 1,
      errorTitle: '가이드 이탈',
      error: defaultErrorList && defaultErrorList.guide_departure,
    },
    {
      id: 2,
      errorTitle: '오버 드라이브',
      error: defaultErrorList && defaultErrorList.over_drive_100cm,
    },
  ];

  return (
    <div className="errorChartPresenter">
      <div className="lineBarChartBox">
        <LineBarChart
          error={defaultErrorList && defaultErrorList.serve_error_count}
        />
      </div>
      <div className="doughnutChartBox">
        {doughnutChart.map(chart => (
          <CountChart
            key={chart.id}
            error={chart.error}
            name={chart.errorTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ErrorChartPresenter;
