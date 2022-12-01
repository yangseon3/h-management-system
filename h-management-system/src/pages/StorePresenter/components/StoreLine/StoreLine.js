import React from 'react';
import { Bar } from 'react-chartjs-2';

const StoreLine = ({ countData }) => {
  const timeLabels = countData && countData.map(time => time.hours);
  const servingData = countData && countData.map(avg => avg.avg_cnt);

  const optionsChart = {
    maintainAspectRatio: true,

    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: '#8898AA',
      },
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: true,
    },
  };

  const data = {
    labels: timeLabels,
    datasets: [
      {
        type: 'line',
        label: 'Serving Counts',
        backgroundColor: 'transparent',
        tension: 0,
        borderColor: '#303D60',
        data: servingData,
      },
    ],
  };
  return (
    <div className="storeLine">
      <Bar
        data={data}
        options={optionsChart}
        style={{ width: 'auto', height: '100%' }}
      />
    </div>
  );
};

export default StoreLine;
