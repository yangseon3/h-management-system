import React from 'react';
import TabContent from './TabContent/TabContent';

const DayTab = ({ params, isLoading, data }) => {
  const dayData = params.productId
    ? data && data[params.productId].day
    : data && data.all.day;

  return !isLoading && <TabContent before="전일" dataValue={dayData} />;
};

export default DayTab;
