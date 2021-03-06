import React, { Component, Fragment } from 'react';
import NavBar from '../components/util/navbar';
import Chart from './util/chart';
import ChurchList from './util/churchlist'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAllPoints, getAllActs } from '../redux/actions/appActions';
import '../css/app.css';
import { bindActionCreators } from 'redux';


export class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loggedin: this.props.auth.isAuthenticated
        }
    
    }
    

    componentDidMount() {   
        this.props.getAllPoints();
        this.props.getAllActs();     
        }


    render() {
        if(!this.props.auth.isAuthenticated){
            return <Redirect to='/login' />
        }
        return(
            <Fragment>
            <NavBar/>
            <div className="app-wrapper">
                
                <div className='headersection'>                   
                    <div className='totalactsmessage'>Acts completed:{this.props.points.points}</div>
                    <div className='smallmessage'>Acts: {this.props.points.points}</div>
                </div>
               
                <div className='data'>
                    <div className='d3'>
                    <Chart className="chartwidth" chartData={this.props.points} />
                    </div>
                
                </div>
                <div className='mainsection'>
                    <ChurchList allacts={this.props.churchlist} isLoading={this.props.isLoading} />
                </div>
        
            </div>
            </Fragment>
        )
    }

}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ getAllPoints, getAllActs}, dispatch)
}



const mapStateToProps  = state => 
{ 
    return {
        points: state.app,
        churchlist: state.churchlist.churchlist,
        isLoading: state.churchlist.isLoading,
        auth: state.auth
    }
}

export default connect (mapStateToProps, mapDispathToProps) (App);