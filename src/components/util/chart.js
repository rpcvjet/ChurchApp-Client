import React, { Component } from 'react';
import {Bar} from 'britecharts-react';

const barData = [

    {
        name: 'Total',
        value: 100
    }
]

const marginObject = {
    left: 100,
    right: 150,
    top: 59,
    bottom: 5,
};

class BarChart extends Component {

  
    
    render () {

        // const { value } = this.state.data

        return(
            <div>

                <Bar 
                labelsMargin={0}
                height={500}
                data={barData}
                width={450}
                isHorizontal={false}
                margin={marginObject}
                />

            
            </div>
        )
    }

}

export default BarChart;