import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './DoughnutChart.scss';

const DoughnutChart = ({ error }) => {
  const errorLabels = [];

  for (let key in error) {
    if (error[key] !== null) {
      errorLabels.push(key);
    }
  }

  const errorDatasets = [];

  for (let key in error) {
    if (error[key] !== null) {
      errorDatasets.push(error[key]);
    }
  }

  const total = errorDatasets.reduce((a, b) => a + b, 0);

  const data = {
    labels: errorLabels,
    datasets: [
      {
        data: errorDatasets,
        backgroundColor: [
          'rgb(242,165,152)',
          'rgb(255,232,157)',
          'rgb(236,107,109)',
          'rgb(122,231,125)',
          '#36A2EB',
        ],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="countChart">
      <Doughnut
        data={data}
        options={{
          cutoutPercentage: 75,
          legend: {
            display: false,
          },
          plugins: {
            doughnutlabel: {
              labels: [
                {
                  text: total,
                  font: {
                    size: '30',
                  },
                  color: 'black',
                },
              ],
            },
            // ChartDataLabels: {
            //   text: 'asd',
            //   color: 'black',
            //   font: {
            //     size: 14,
            //     weight: 'bold',
            //   },
            // },
            datalabels: {
              display: true,
              color: 'black',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
