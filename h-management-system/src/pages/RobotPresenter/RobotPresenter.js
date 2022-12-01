import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import API from 'api';
import { basicApi } from 'lib/config';
import RobotList from './components/RobotList/RobotList';
import RobotMap from './components/RobotMap/RobotMap';
import './RobotPresenter.scss';

const RobotPresenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('status');
  const params = useParams();

  const robotData = useQuery(['RobotKey', params], async () => {
    const { data } = await basicApi.get(
      params.category === 'all'
        ? `${API.robot}?status=${sort}`
        : `${API.robot}/map_id/${params.category}?status=${sort}`
    );
    return data;
  });

  const resultData = robotData && robotData.data;

  return (
    <div className="robotPresenter">
      {resultData && (
        <>
          <RobotList
            robotData={resultData.robot}
            params={params}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            sort={sort}
          />
          <RobotMap robotData={resultData.robot} params={params} />
        </>
      )}
    </div>
  );
};

export default RobotPresenter;
