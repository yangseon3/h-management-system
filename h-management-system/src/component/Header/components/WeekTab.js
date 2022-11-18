import React from 'react';
import TabContent from './TabContent/TabContent';

const WeekTab = ({ params, isLoading, data }) => {
  const weekData = params.productId
    ? data && data[params.productId].month
    : data && data.all.month;
  return (
    !isLoading && <TabContent menu="주간" before="전주" dataValue={weekData} />
  );
};

export default WeekTab;
