import React from 'react';
import './ServingLogs.scss';

const ServingLogs = ({ servingLogData }) => {
  const objKeys =
    servingLogData && servingLogData.map(data => Object.keys(data));

  const objValues =
    servingLogData && servingLogData.map(item => Object.values(item));

  return (
    <div className="servingDataContents">
      <table className="servingDataContentsWrapper">
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

export default ServingLogs;
