# frequencyhistogram 
I have hosted this on the github :- https://riyapat.github.io/frequencyhistogram/

#Histogram of Word Frequency
This project provides a web application that generates a word frequency histogram based on the input text. It utilizes the Chart.js library to create the histogram visualization.

#Components
App
The App component is the main component of the application. It renders the word frequency histogram and provides a button to fetch and process the input text. The component maintains the text state, which represents the input text, and the histogramData state, which holds the data for the histogram.

#The component includes the following functions:

#handleClick: This function is triggered when the user clicks the "Submit" button. It fetches the input text from the specified URL, calculates the word frequency using the getFrequency function, updates the text state, and generates the histogram data using the getHistogramData function.
#getFrequency: This function takes the input text as a parameter and returns an object representing the frequency of each word in the text.
#getTopWords: This function takes the word frequency object as a parameter and returns an array of the top 20 most occurring words based on their frequency.
#getHistogramData: This function takes the word frequency object as a parameter and returns the data object required for the histogram visualization. It includes the labels (top words) and datasets (word frequency data) for the chart.
#exportCSV: This function is triggered when the user clicks the "Export" button. It generates a CSV file containing the labels and data of the histogram and initiates the download of the file.
#Histogram
The Histogram component is a reusable component that encapsulates the rendering of the word frequency histogram using the Chart.js library. It receives the word frequency data as props and updates the chart accordingly.

The component utilizes the useState and useEffect hooks to manage the chart data. It receives the top20Words prop, which represents the top 20 words and their corresponding counts. The component initializes the chart data in the chartData state and updates it whenever the top20Words prop changes.

#Libraries and Plugins
The following libraries and plugins are used in this code:

React: A JavaScript library for building user interfaces.
react-chartjs-2: A React wrapper for Chart.js that provides a set of components for rendering various chart types.
Chart.js: A JavaScript library for data visualization. It provides a simple and flexible API to create charts.
chart.js/auto: A module that automatically registers the necessary components and plugins from Chart.js based on the chart type used in the code.
Make sure to install these libraries as dependencies in your project before running the code.
#THANK YOU 
