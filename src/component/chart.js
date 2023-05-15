import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Histogram(props) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const labels = props.top20Words.map((word) => word.word);
    const data = props.top20Words.map((word) => word.count);

    const chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Word Count',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Word Count',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Words',
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Top 20 Most Occurring Words',
          },
          legend: {
            display: false,
          },
        },
      },
    };

    setChartData(chartConfig);
  }, [props.top20Words]);

  return <canvas ref={(chartRef) => new Chart(chartRef, chartData)} />;
}

export default Histogram;