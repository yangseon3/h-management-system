import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ErrorStatisticController } from './ErrorStatisticController';
import './ErrorStatisticPresenter.scss';
const ErrorStatisticPresenter = () => {
  const [total, setTotal] = useState(0);
  const [statistic, setStatisitc] = useState({});

  const sumStatistics = data => {
    let sum = 0;

    for (let key in data) if (data[key] !== 'all') sum += data[key];

    return sum;
  };

  const { status, data, error } = useQuery(
    ['errorStatistic'],
    ErrorStatisticController,
    {
      onSuccess: data => {
        let [err, result] = data;
        if (!err) {
          setTotal(sumStatistics(result.all));
          setStatisitc(result.all);
        } else {
          console.log(result);
        }
      },
      // refetchInterval: 1000,
    }
  );

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="errorStatic">
      {STATIC_NAME.map(name => (
        <div key={name.id}>
          <p>{name.name}</p>
          {name.name === '전체' ? (
            <p>{total}</p>
          ) : (
            <p>{statistic[name.name]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const STATIC_NAME = [
  { id: 0, name: '전체' },
  { id: 1, name: 'critical' },
  { id: 2, name: 'major' },
  { id: 3, name: 'minor' },
];

export default ErrorStatisticPresenter;
