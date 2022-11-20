import React, { useState, useEffect } from 'react';
import { basicApi } from 'lib/config';
import API from 'api';
import TabContent from './TabContent/TabContent';

const MonthTab = ({ params }) => {
  const [monthData, setMonthData] = useState({});
  useEffect(() => {
    basicApi
      .get(API.statistic)
      .then(res => res.data)
      .then(data =>
        params.productId
          ? setMonthData(data[params.productId].month)
          : setMonthData(data.all.month)
      );
  }, [params]);
  return <TabContent menu="월간" before="전월" dataValue={monthData} />;
};

export default MonthTab;
