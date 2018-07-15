import React, { Component } from 'react';
import {Bar} from 'britecharts-react';

const barData = [

    {
        name: 'Total',
        value: 10
    }
]

const marginObject = {
    left: 100,
    right: 50,
    top: 59,
    bottom: 5,
};

class BarChart extends Component {

  
    state = {
        data: [{value: 5}]
    }
    
    render () {

        const { value } = this.state.data

        return(
            <div>

                <Bar 
                height={500}
                data={barData}
                width={400}
                isHorizontal={false}
                margin={marginObject}
                />

            
            </div>
        )
    }

}

export default BarChart;