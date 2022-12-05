import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from 'api';
import { basicApi } from 'lib/config';
import RobotList from './components/RobotList/RobotList';
import RobotMap from './components/RobotMap/RobotMap';
import './RobotPresenter.scss';

const RobotPresenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('state');
  const params = useParams();

  const robotData = useQuery(['RobotKey', params, sort], async () => {
    const { data } = await basicApi.get(
      params.category === 'all'
        ? `${API.robot}?state=${sort ? sort : ''}`
        : `${API.robot}/map_id/${params.category}?state=${sort ? sort : ''}`
    );
    return data;
  });

  const resultData = robotData && robotData.data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="robotPresenter"
    >
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
    </motion.div>
  );
};

export default RobotPresenter;
