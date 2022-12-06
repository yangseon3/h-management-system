import React from 'react';
import './RobotLogs.scss';

const RobotLogs = ({ robotLogData }) => {
  const objKeys = robotLogData && robotLogData.map(data => Object.keys(data));

  const objValues =
    robotLogData && robotLogData.map(item => Object.values(item));

  return (
    <div className="robotLogsDataContents">
      <table className="robotLogsDataContentsWrapper">
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

export default RobotLogs;
