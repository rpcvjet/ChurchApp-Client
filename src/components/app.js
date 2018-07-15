import React, { Component, Fragment } from 'react';
import BarChart from './util/chart';
import ChurchList from './util/churchlist'
import {Link} from 'react-router-dom';
import '../css/app.css';

class App extends Component {

    render() {

        return(
            <div className="app-wrapper">
                
                <div className='headersection'>
                    <div className='totalactsmessage'>
                    <Link to='/'><i className="myicons home icon">Home</i></Link>
                    <Link to='/addact'><i className="myicons pencil icon">User Dashboard</i></Link>
        
                    A Total of 100 Acts have been accomplished!
                    </div>
                </div>
                <div className='data'>
                    <BarChart />
                
                </div>
                <div className='mainsection'>
                    <ChurchList />
                </div>
            
            </div>

        )
    }

}

export default App;