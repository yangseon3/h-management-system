import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { basicApi } from 'lib/config';

const StoreCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const currentLocation = location.pathname.split('/')[1];

  const handleCategory = e => {
    navigate(`/${currentLocation}/${e.target.value}`);
  };

  const storeData = useQuery(['StoreKey'], async () => {
    const { data } = await basicApi.get(process.env.REACT_APP_store);
    return data;
  });

  const optionMenu = storeData.data && storeData.data.stores;

  return (
    <select onChange={handleCategory} value={params.category}>
      <option value="all">전체매장</option>
      {optionMenu &&
        optionMenu.map((option, idx) => (
          <option key={idx} value={option.map_id}>
            {option.map_name}
          </option>
        ))}
    </select>
  );
};

export default StoreCategory;
