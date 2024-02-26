import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Labels from './Labels';
import Chart from 'chart.js/auto';
import { useExpense } from '../context/ExpenseContext';

const Graph = () => {
  const { expenses } = useExpense();
  const [totalAmount, setTotalAmount] = useState(0);

  // Extracting categories and values from expenses
  const expenseCategories = expenses.map((expense) => expense.category);
  const expenseValues = expenses.map((expense) => expense.yourAmount);

  // Calculate the total amount
  useEffect(() => {
    const newTotalAmount = expenses.reduce((total, expense) => total + expense.yourAmount, 0);
    setTotalAmount(newTotalAmount);
  }, [expenses]);

  const doughnutData = {
    labels: expenseCategories,
    datasets: [{
      data: expenseValues,
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
    const newTotalAmount = expenses.reduce((total, expense) => total + Number(expense.yourAmount), 0);
    setTotalAmount(newTotalAmount);
    // Assuming expenses have a date and yourAmount, and you want to aggregate by month or a specific label
  
    // Example of preparing the data. You would need to replace this logic with your actual data preparation logic.
    // This example assumes you somehow aggregate or map expenses to months or categories
    const preparedLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // This should come from your actual data
    const preparedData = expenses.map(expense => parseFloat(expense.yourAmount)); // Convert to float and aggregate as needed
  
    const lineData = {
      labels: preparedLabels,
      datasets: [{
        label: 'Expense Over Time',
        data: preparedData, // Use the prepared data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  
    // Get the canvas element
    const lineChartCanvas = document.getElementById('lineChartCanvas');
  
    // Check if the canvas has an associated Chart instance
    const existingChart = Chart.getChart(lineChartCanvas); // Simplified check
  
    // Destroy the existing Chart instance if it exists
    if (existingChart) {
      existingChart.destroy();
    }
  
    // Create a new Chart instance
    if (lineChartCanvas) {
      new Chart(lineChartCanvas, {
        type: 'line',
        data: lineData,
      });
    }
  }, [expenses]); // Dependency array includes expenses to re-run when expenses change
   // Dependency array includes expenses

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut data={doughnutData} options={{ cutout: 115 }} />
          <h3 className='mb-4 font-bold title'>Total
            <span className='block text-3xl text-emerald-400'>Rs.{totalAmount}</span>
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
