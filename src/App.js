import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

function App() {
  const [text, setText] = useState(null);
  const [histogramData, setHistogramData] = useState(null);

  const handleClick = async () => {
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const data = await response.text();
    const frequency = getFrequency(data);
    setText(frequency);
    setHistogramData(getHistogramData(frequency));
  };

  const getFrequency = (text) => {
    const words = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split(" ");
    const frequency = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (frequency[word]) {
        frequency[word]++;
      } else {
        frequency[word] = 1;
      }
    }
    return frequency;
  };

  const getTopWords = (frequency) => {
    const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, 20).map(([word, count]) => word);
  };
  
  const getHistogramData = (frequency) => {
    const topWords = getTopWords(frequency);
    const data = {
      labels: topWords,
      datasets: [
        {
          label: 'Word Frequency',
          backgroundColor: 'rgba(36, 44, 70, 0.8)',
          borderColor: 'rgba(36, 44, 70, 1)',

          borderWidth: 1,
          data: topWords.map((word) => frequency[word]),
        },
      ],
    };
    return data;
  };

  const exportCSV = () => {
    console.log(histogramData);
    if (histogramData) {
      let csvContent =
        "data:text/csv;charset=utf-8," +
        histogramData.labels.join(",") +
        "\n" +
        histogramData.datasets[0].data.join(",");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "histogram.csv");
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div>
      {!text && <button onClick={handleClick}>Submit</button>}
      {text && (
        <div>
          <h2> Histogram of Word Frequency</h2>
          <Bar data={histogramData} />
          <button onClick={exportCSV}>Export</button>
        </div>
      )}
    </div>
  );
}

export default App;
