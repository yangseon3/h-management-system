import React from 'react';
import StoreCategory from './StoreCategory';
import ErrorCategory from './ErrorCategory';
import './Category.scss';
import LogMappingCategory from './LogMappingCategory';

const Category = ({ type, event, selectedMapId }) => {
  const category = {
    storeCategory: <StoreCategory />,
    errorCategory: (
      <ErrorCategory event={event} selectedMapId={selectedMapId} />
    ),
    logCategory: (
      <LogMappingCategory event={event} selectedMapId={selectedMapId} />
    ),
  };
  return <div className="categoryBox">{category[type]}</div>;
};

export default Category;
