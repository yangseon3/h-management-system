import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { basicApi } from 'lib/config';
import StoreList from './components/StoreList/StoreList';
import StoreInfo from './components/StoreInfo/StoreInfo';
import './StorePresenter.scss';

const StorePresenter = () => {
  const params = useParams();

  const storeData = useQuery(['StoreKey', params], async () => {
    const { data } = await basicApi.get(
      params.category === 'all'
        ? process.env.REACT_APP_store
        : `${process.env.REACT_APP_store}/${params.category}`
    );
    return data;
  });
  const resultData = storeData && storeData.data;
  return (
    <motion.div
      className="storePresenter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {resultData && (
        <>
          <StoreList storeData={resultData.stores} params={params} />
          <StoreInfo
            countData={resultData.week}
            robotData={resultData.robot_counts[0]}
            params={params}
          />
        </>
      )}
    </motion.div>
  );
};

export default StorePresenter;
