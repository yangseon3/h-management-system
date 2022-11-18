import React from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import './TabContent.scss';

const TabContent = ({ before, resultData, params, category }) => {
  const dataValue = params.productId
    ? resultData && resultData[params.productId][category]
    : resultData && resultData.all[category];

  const CONTENT_BOXES = [
    {
      id: 1,
      title: '서빙횟수',
      unit: '번',
      currentValue: dataValue.serving_count,
      prevValue: dataValue.serving_count_before,
    },
    {
      id: 2,
      title: '이동거리',
      unit: 'km',
      currentValue: dataValue.move_distance,
      prevValue: dataValue.move_distance_before,
    },
    {
      id: 3,
      title: '서빙평균시간',
      unit: 'm',
      currentValue: dataValue.avg_serving_time,
      prevValue: dataValue.avg_serving_time_before,
    },
    {
      id: 4,
      title: '주행효율',
      unit: '%',
      currentValue: Number(dataValue.performance) * 100,
      prevValue: Number(dataValue.performance_before) * 100,
    },
  ];
  const calcResult = (cur, prev) => {
    return Math.abs(parseInt(((cur - prev) / prev) * 100));
  };
  return (
    <div className="tabContent">
      {CONTENT_BOXES?.map(({ id, title, currentValue, prevValue, unit }) => (
        <div className="dataBox" key={id}>
          <p>{title}</p>
          <div className="mainData">
            {currentValue}
            <span className="mainUnit">{unit}</span>
          </div>
          <div className="compareBox">
            <p>
              {before} : {prevValue}
            </p>
            <div className="resultValue">
              <span>
                {prevValue > currentValue ? (
                  <BsFillCaretDownFill
                    className="compareIcon"
                    style={{ color: 'red' }}
                  />
                ) : (
                  <BsFillCaretUpFill
                    className="compareIcon"
                    style={{ color: 'green' }}
                  />
                )}
              </span>
              <p>
                {calcResult(currentValue, prevValue)
                  ? calcResult(currentValue, prevValue) + '%'
                  : currentValue + unit}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
