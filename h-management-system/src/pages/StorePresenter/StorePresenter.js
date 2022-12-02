import React from 'react';
import { useQuery } from 'react-query';
import './StorePresenter.scss';
import { useParams } from 'react-router-dom';
import { basicApi } from 'lib/config';
import API from 'api';
import StoreList from './components/StoreList/StoreList';
import StoreInfo from './components/StoreInfo/StoreInfo';

const StorePresenter = () => {
  const params = useParams();

  const storeData = useQuery(['StoreKey', params], async () => {
    const { data } = await basicApi.get(
      params.category === 'all' ? API.store : `${API.store}/${params.category}`
    );
    return data;
  });
  const resultData = storeData && storeData.data;
  return (
    <div className="storePresenter">
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
    </div>
  );
};

export default StorePresenter;
