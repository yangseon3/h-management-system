import React from 'react';
import TabContent from './TabContent/TabContent';

const MonthTab = ({ params, isLoading, data }) => {
  const monthData = params.productId
    ? data && data[params.productId].month
    : data && data.all.month;

  return (
    !isLoading && <TabContent menu="월간" before="전월" dataValue={monthData} />
  );
};

export default MonthTab;
