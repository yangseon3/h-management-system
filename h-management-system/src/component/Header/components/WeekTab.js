import React, { useState, useEffect } from 'react';
import { basicApi } from 'lib/config';
import API from 'api';
import TabContent from './TabContent/TabContent';

const WeekTab = () => {
  const [weekData, setWeekData] = useState({});
  useEffect(() => {
    basicApi
      .get(API.statistic)
      .then(res => res.data)
      .then(data => setWeekData(data.all.week));
  }, []);

  return <TabContent menu="주간" before="전주" dataValue={weekData} />;
};

export default WeekTab;
