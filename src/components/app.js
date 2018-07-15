import React, { Component, Fragment } from 'react';
import BarChart from './util/chart';
import '../css/app.css';

class App extends Component {

    render() {

        return(
            <div className="app-wrapper">
                
                <div className='headersection'>
                    <div className='totalactsmessage'>
                    A Total of 100 Acts have been accomplished!
                    </div>
                </div>
                <div className='data'>
                    <BarChart />
                
                </div>
                <div className='mainsection'>Main area</div>
            
            </div>

        )
    }

}

export default App;