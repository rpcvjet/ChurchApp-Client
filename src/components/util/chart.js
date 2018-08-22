import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'


class Chart extends Component {
    
    render() {

      const data = [
        {name: 'Acts', value: this.props.chartData.points[0]},
    
  ];
      return (
        <div>
          	<BarChart width={500} height={500} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis type='number' domain={[ 0, 100]}/>
       <Tooltip/>
       <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
        </div>
      );
    }
  };

export default Chart;