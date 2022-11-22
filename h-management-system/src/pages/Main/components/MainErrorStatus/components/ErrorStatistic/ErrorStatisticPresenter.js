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
      // refetchInterval: 1000,
    }
  );

  const errorData = errorStatistic.data && errorStatistic.data[1];

  return (
    <div className="errorStatic">
      <div className="staticHeader">에러 상태</div>
      <div className="staticContentsBox">
        <table style={{ background: 'white' }}>
          <tr>
            {STATIC_NAME.map(name => (
              <th scope="col" key={name.id}>
                {name.name}
              </th>
            ))}
          </tr>
          <tr>
            {errorData &&
              STATIC_NAME.map(name =>
                name.name === '전체' ? (
                  <td key={name.id}>{total}</td>
                ) : (
                  <td key={name.id}>{errorData.all[name.name]}</td>
                )
              )}
          </tr>
        </table>
      </div>
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
