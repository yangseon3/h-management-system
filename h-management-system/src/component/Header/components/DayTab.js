import React, { useState, useEffect } from 'react';
import { basicApi } from 'lib/config';
import API from 'api';
import TabContent from './TabContent/TabContent';

const DayTab = () => {
  const [dayData, setDayData] = useState({});
  useEffect(() => {
    basicApi
      .get(API.statistic)
      .then(res => res.data)
      .then(data => setDayData(data.all.day));
  }, []);
  return <TabContent before="전일" dataValue={dayData} />;
};

export default DayTab;
