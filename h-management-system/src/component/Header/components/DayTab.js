import React, { useState, useEffect } from 'react';
import { basicApi } from 'lib/config';
import API from 'api';
import TabContent from './TabContent/TabContent';

const DayTab = ({ params }) => {
  const [dayData, setDayData] = useState({});

  useEffect(() => {
    basicApi
      .get(API.statistic)
      .then(res => res.data)
      .then(data =>
        params.productId
          ? setDayData(data[params.productId].day)
          : setDayData(data.all.day)
      );
  }, [params]);

  return <TabContent before="전일" dataValue={dayData} />;
};

export default DayTab;
