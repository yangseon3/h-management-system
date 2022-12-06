import React from 'react';
import './ErrorLogs.scss';

const ErrorLogs = ({ errorLogData }) => {
  const objKeys = errorLogData && errorLogData.map(data => Object.keys(data));

  const objValues =
    errorLogData && errorLogData.map(item => Object.values(item));

  return (
    <div className="errorDataContents">
      <table className="errorDataContentsWrapper">
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

export default ErrorLogs;
