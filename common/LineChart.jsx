import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Servings',
        data: [100, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          endingShape: 'rounded',
          colors: {
            ranges: [{
              from: 0,
              to: 100,
              color: '#0f6ca5', 
            }],
          },
        },
        },
        dataLabels: {
          enabled: false, // Hide the default data labels
        },
        stroke: {
          show: true,
          width: 1,
          colors: "000",
        },
        xaxis: {
          categories: ['24 Nov', '26 Nov', '24 Nov', '28 Nov', '30 Nov', '08 Des', '10 Des', '12 Des', '15 Des', '18 Des', '25 Des', '30 Des'],
        },
        xaxis: {
          title: {
            text: 'Current Year',
          },
        },
        fill: {
          opacity: 1, // Set the opacity of the bars

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' servings';
            },
          },
        },
        theme: {
          palette: '#0f6ca5',
        },
      },
    });

  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default LineChart;
