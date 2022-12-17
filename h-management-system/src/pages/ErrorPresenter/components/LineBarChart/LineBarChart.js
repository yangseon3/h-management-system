import React from 'react';
import { Bar } from 'react-chartjs-2';
import './LineBarChart.scss';

const LineBarChart = ({ error }) => {
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
    labels: error && error.date,
    datasets: [
      {
        type: 'line',
        label: 'Error Counts',
        backgroundColor: 'transparent',
        tension: 0,
        borderColor: '#303D60',
        data: error && error.error_count,
      },
      {
        type: 'bar',
        label: 'Serve Counts',
        borderRadius: 2,
        data: error && error.serving_count,
        backgroundColor: '#8887c0',
        fontColor: 'white',
        barThickness: 20,
      },
    ],
  };

  return (
    <div className="chartBox">
      <Bar data={data} options={optionsChart} />
    </div>
  );
};

export default LineBarChart;
