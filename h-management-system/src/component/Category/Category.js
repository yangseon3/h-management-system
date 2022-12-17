import React from 'react';
import StoreCategory from './StoreCategory';
import ErrorCategory from './ErrorCategory';
import './Category.scss';
import LogMappingCategory from './LogMappingCategory';
import { IoMdArrowDropdown } from 'react-icons/io';

const Category = ({ type, event, mapId }) => {
  const category = {
    storeCategory: <StoreCategory />,
    errorCategory: <ErrorCategory event={event} mapId={mapId} />,
    logCategory: <LogMappingCategory event={event} />,
  };
  return (
    <div className="categoryBox">
      {category[type]}
      <IoMdArrowDropdown className="selectIcon" />
    </div>
  );
};

export default Category;
