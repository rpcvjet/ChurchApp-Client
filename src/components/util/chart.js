import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['Acts'],
    datasets: [
      {
        label: 'Number of Acts',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [30]   
      }
    ]
  };
  
  class BarChart extends Component {
    // displayName: 'BarExample',
  
    render() {
      return (
        <div>
          <Bar
            barPercentage= {10}
            data={data}
            width={270}
            height={400}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 500
                    }
                }]
            }
            }}
          />
        </div>
      );
    }
  };

export default BarChart;