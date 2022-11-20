import React, { useState, useEffect } from 'react';
import { basicApi } from 'lib/config';
import API from 'api';
import TabContent from './TabContent/TabContent';

const WeekTab = ({ params }) => {
  const [weekData, setWeekData] = useState({});
  useEffect(() => {
    basicApi
      .get(API.statistic)
      .then(res => res.data)
      .then(data =>
        params.productId
          ? setWeekData(data[params.productId].week)
          : setWeekData(data.all.week)
      );
  }, [params]);

  return <TabContent menu="주간" before="전주" dataValue={weekData} />;
};

export default WeekTab;
