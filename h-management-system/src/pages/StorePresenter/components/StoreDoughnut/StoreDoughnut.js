import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const StoreDoughnut = ({ totalRobots, availableRobots }) => {
  const data = {
    labels: ['사용가능', '사용불가'],
    datasets: [
      {
        data: [availableRobots, totalRobots - availableRobots],
        backgroundColor: ['#558EFF', '#ff7171'],
        borderWidth: 0,
      },
    ],
    hoverBorderWidth: 0,
    weight: 0,
  };
  return (
    <div className="storeDoughnut">
      <Doughnut
        data={data}
        options={{
          cutoutPercentage: 75,
          legend: {
            display: true,
          },
          plugins: {
            doughnutlabel: {
              labels: [
                {
                  font: {
                    size: '30',
                  },
                  color: 'black',
                },
              ],
            },
            datalabels: {
              display: true,
              color: 'white',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          tooltips: {
            backgroundColor: '#5a6e7f',
          },
        }}
      />
      <div className="doughnutText">
        <span id="able">{availableRobots}</span>
        <span id="bar">/</span>
        <span id="all">{totalRobots}</span>
      </div>
    </div>
  );
};

export default StoreDoughnut;
