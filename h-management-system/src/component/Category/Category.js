import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import StoreCategory from './StoreCategory';
import ErrorCategory from './ErrorCategory';
import API from 'api';
import { basicApi } from 'lib/config';
import './Category.scss';

const Category = ({ type, event, selectedMapId }) => {
  const category = {
    storeCategory: <StoreCategory />,
    errorCategory: (
      <ErrorCategory event={event} selectedMapId={selectedMapId} />
    ),
  };

  return <div className="categoryBox">{category[type]}</div>;
};

export default Category;
