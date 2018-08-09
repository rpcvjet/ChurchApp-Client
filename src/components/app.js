import React, { Component, Fragment } from 'react';
import BarChart from './util/chart';
import ChurchList from './util/churchlist'
import NavBar from '../components/util/navbar'
import '../css/app.css';

class App extends Component {

    render() {
        
        return(
            <Fragment>
            <NavBar/>
            <div className="app-wrapper">
                
                <div className='headersection'>                   
                    <div className='totalactsmessage'>Acts completed: 100</div>
                    <div className='smallmessage'>Acts: 100</div>
                </div>
               
                <div className='data'>
                    <div className='d3'>
                    <BarChart  />
                    </div>
                
                </div>
                <div className='mainsection'>
                    <ChurchList />
                </div>
        
            </div>
            </Fragment>
        )
    }

}

export default App;