import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import API from 'api';
import { basicApi } from 'lib/config';
import RobotList from './components/RobotList/RobotList';
import RobotMap from './components/RobotMap/RobotMap';
import './RobotPresenter.scss';

const RobotPresenter = () => {
  const params = useParams();
  const robotData = useQuery(['RobotKey', params], async () => {
    const { data } = await basicApi.get(
      params.category === 'all'
        ? API.robot
        : `${API.robot}/map_id/${params.category}`
    );
    return data;
  });

  const resultData = robotData && robotData.data;

  return (
    <div className="robotPresenter">
      {resultData && (
        <>
          <RobotList robotData={resultData.robot} params={params} />
          <RobotMap robotData={resultData.robot} params={params} />
        </>
      )}
    </div>
  );
};

export default RobotPresenter;
