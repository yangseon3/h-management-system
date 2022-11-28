import React from 'react';
import { useQuery } from 'react-query';

import API from 'api';
import { basicApi } from 'lib/config';
import RobotList from './components/RobotList/RobotList';
import RobotMap from './components/RobotMap/RobotMap';
import './RobotPresenter.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RobotPresenter = () => {
  const params = useParams();
  const robotData = useQuery(['RobotKey'], async () => {
    // const { data } = await basicApi.get(
    //   params.category === 'all' ? API.robot : `${API.robot}/${params.category}`
    // );
    const { data } = await axios.get('/data/robot.json');
    return data;
  });
  // console.log(
  //   params.category === 'all'
  //     ? `${API.robot}`
  //     : `${API.robot}/${params.category}`
  // );
  const resultData = robotData && robotData.data;

  return (
    <div className="robotPresenter">
      {resultData && (
        <>
          <RobotList robotData={resultData.robots} params={params} />
          <RobotMap robotData={resultData.robots} params={params} />
        </>
      )}
    </div>
  );
};

export default RobotPresenter;
