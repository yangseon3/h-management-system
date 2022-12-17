import React from 'react';
import { GetUserLog } from 'pages/LogPresenter/component/LogDataController/LogDataController';
import { useQuery } from 'react-query';
import './Users.scss';

const Users = ({ mapId }) => {
  const userLog = useQuery(['UserData', mapId], GetUserLog);

  const userLogData = userLog.data && userLog.data[1].users;

  const objKeys = userLogData && userLogData.map(data => Object.keys(data));

  const objValues = userLogData && userLogData.map(item => Object.values(item));

  return (
    <div className="userDataContents">
      <table className="userDataContentsWrapper">
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

export default Users;
