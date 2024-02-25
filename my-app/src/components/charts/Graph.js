import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Labels from './Labels';
import Chart from 'chart.js/auto';

const Graph = () => {
  const doughnutData = {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius: 30,
      spacing: 10
    }]
  };

  useEffect(() => {
    // Move lineData initialization inside the useEffect
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Create Line chart after component is mounted
    const lineChartCanvas = document.getElementById('lineChartCanvas');
    if (lineChartCanvas) {
      new Chart(lineChartCanvas, {
        type: 'line',
        data: lineData,
      });
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut data={doughnutData} options={{ cutout: 115 }} />
          <h3 className='mb-4 font-bold title'>Total
            <span className='block text-3xl text-emerald-400'>Rs.{0}</span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          {/* Labels */}
          <Labels />
          
          {/* Line chart */}
          <div className="chart relative">
            <canvas id="lineChartCanvas" width="400" height="200"></canvas>
            {/* Additional content or labels for the line chart */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
