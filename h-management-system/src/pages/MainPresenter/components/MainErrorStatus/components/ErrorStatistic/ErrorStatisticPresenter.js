import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ErrorStatisticController } from './ErrorStatisticController';
import './ErrorStatisticPresenter.scss';

const ErrorStatisticPresenter = () => {
  const [total, setTotal] = useState(0);

  const sumStatistics = data => {
    let sum = 0;

    for (let key in data) if (data[key] !== 'all') sum += data[key];

    return sum;
  };

  const errorStatistic = useQuery(
    ['errorStatistic'],
    ErrorStatisticController,
    {
      onSuccess: data => {
        let [err, result] = data;
        if (!err) {
          setTotal(sumStatistics(result.all));
        } else {
          console.log(result);
        }
      },
      refetchInterval: 1000,
    }
  );

  const errorData = errorStatistic.data && errorStatistic.data[1];

  return (
    <div className="errorStatic">
      <div className="staticHeader">에러 상태</div>
      <div className="staticContentsBox">
        <div className="statisticTypeBox">
          {STATIC_NAME.map(name => (
            <div className="statisticItem" key={name.id}>
              <div
                className="statisticColorBox"
                style={{ background: name.color }}
              />
              <p className="statisticText">{name.name}</p>
            </div>
          ))}
        </div>
        <div className="statisticCountsBox">
          <p className="statisticCountsText">{total}</p>
          <p className="statisticCountsText">
            {errorData && errorData.all.critical}
          </p>
          <p className="statisticCountsText">
            {errorData && errorData.all.major}
          </p>
          <p className="statisticCountsText">
            {errorData && errorData.all.minor}
          </p>
        </div>
      </div>
    </div>
  );
};

const STATIC_NAME = [
  { id: 0, name: '전체', color: '#f0f3fa' },
  { id: 1, name: 'CRITICAL', color: '#d9376d' },
  { id: 2, name: 'MAJOR', color: '#406dfa' },
  { id: 3, name: 'MINOR', color: '#299d38' },
];

export default ErrorStatisticPresenter;
