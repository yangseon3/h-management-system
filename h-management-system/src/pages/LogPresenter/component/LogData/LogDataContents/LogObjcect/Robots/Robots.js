import React from 'react';
import { useQuery } from 'react-query';
import { GetRobotLog } from 'pages/LogPresenter/component/LogDataController/LogDataController';
import './Robots.scss';

const Robots = ({ mapId }) => {
  const robotLog = useQuery(['RobotData', mapId], GetRobotLog);
  const robotLogData = robotLog.data && robotLog.data[1].robots;

  const objKeys = robotLogData && robotLogData.map(data => Object.keys(data));

  const objValues =
    robotLogData && robotLogData.map(item => Object.values(item));

  return (
    <div className="robotDataContents">
      <table className="robotDataContentsWrapper">
        <tr>
          {objKeys &&
            objKeys[0].map((item, index) => (
              <th scope="col" key={index}>
                {item}
              </th>
            ))}
        </tr>
        {objValues &&
          objValues.map((data, index) => (
            <tr key={index}>
              {data &&
                data.map((valueData, index) => (
                  <td scope="col" key={index}>
                    {valueData}
                  </td>
                ))}
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Robots;
