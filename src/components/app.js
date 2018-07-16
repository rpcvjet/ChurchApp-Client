import React, { Component } from 'react';
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
                    Acts completed: 100 
                    </div>

                     <div className='nav'>
                    <Link to='/'><i className="myicons home icon"></i></Link>
                    <Link to='/addact'><i className="myicons user icon"></i></Link>   
                    <Link to='/'><i className="myicons eject icon"></i></Link>   
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