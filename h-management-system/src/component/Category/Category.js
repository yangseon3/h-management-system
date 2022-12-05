import React from 'react';
import StoreCategory from './StoreCategory';
import ErrorCategory from './ErrorCategory';
import './Category.scss';
import LogMappingCategory from './LogMappingCategory';

const Category = ({ type, event, mapId }) => {
  const category = {
    storeCategory: <StoreCategory />,
    errorCategory: <ErrorCategory event={event} mapId={mapId} />,
    logCategory: <LogMappingCategory event={event} />,
  };
  return <div className="categoryBox">{category[type]}</div>;
};

export default Category;
