import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import API from 'api';
import { basicApi } from 'lib/config';
import './Category.scss';

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const currentLocation = location.pathname.split('/')[1];

  const handleCategory = e => {
    navigate(`/${currentLocation}/${e.target.value}`);
  };

  const storeData = useQuery(['StoreKey'], async () => {
    const { data } = await basicApi.get(API.store);
    return data;
  });

  const optionMenu = storeData.data && storeData.data.stores;

  return (
    <div className="categoryBox">
      <select onChange={handleCategory} value={params.category}>
        <option value="all">전체매장</option>
        {optionMenu &&
          optionMenu.map((option, idx) => (
            <option key={idx} value={option.map_id}>
              {option.map_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Category;
