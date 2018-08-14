import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


  
  
  class BarChart extends Component {
    constructor(props){
      super(props)
        this.state = {
          chartData: props.chartData
        }
      }
    



    
  
    render() {
      return (
        <div>
          <Bar
            barPercentage= {10}
            data={this.state.chartData}
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