import React from 'react';
import { useQuery } from 'react-query';
import { GetMapLog } from 'pages/LogPresenter/component/LogDataController/LogDataController';
import './Maps.scss';

const Maps = ({ mapId }) => {
  const mapLog = useQuery(['MapData', mapId], GetMapLog);

  const mapLogData = mapLog.data && mapLog.data[1].maps;

  const objKeys = mapLogData && mapLogData.map(data => Object.keys(data));

  const objValues = mapLogData && mapLogData.map(item => Object.values(item));
  return (
    <div className="mapDataContents">
      <table className="mapDataContentsWrapper">
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

export default Maps;
