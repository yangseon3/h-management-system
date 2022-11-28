import React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import './TabContent.scss';

const TabContent = ({ before, resultData, params, date }) => {
  const dataValue = params.category
    ? resultData && resultData[params.category][date]
    : resultData && resultData.all[date];

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
      {CONTENT_BOXES &&
        CONTENT_BOXES.map(({ id, title, currentValue, prevValue, unit }) => (
          <div className="dataBox" key={id}>
            <div className="mainData">
              {currentValue}
              <span className="mainUnit">{unit}</span>
            </div>
            <div className="compareBox">
              <div className="resultValue">
                <span>
                  {prevValue > currentValue ? (
                    <RiArrowDownSFill
                      className="compareIcon"
                      style={{ color: 'red' }}
                    />
                  ) : (
                    <RiArrowUpSFill
                      className="compareIcon"
                      style={{ color: 'green' }}
                    />
                  )}
                </span>
                <p className="compareValue">
                  {calcResult(currentValue, prevValue)
                    ? calcResult(currentValue, prevValue) + '%'
                    : currentValue + unit}
                </p>
                <p className="compareTitle">{before}대비</p>
              </div>
              <p>{title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TabContent;
