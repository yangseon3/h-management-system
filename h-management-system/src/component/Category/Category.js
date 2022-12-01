import React from 'react';
import StoreCategory from './StoreCategory';
import ErrorCategory from './ErrorCategory';
import './Category.scss';

const Category = ({ type, event, mapId }) => {
  const category = {
    storeCategory: <StoreCategory />,
    errorCategory: <ErrorCategory event={event} mapId={mapId} />,
  };

  return <div className="categoryBox">{category[type]}</div>;
};

export default Category;
