import React, { Component, Fragment } from 'react';
import BarChart from './util/chart';
import ChurchList from './util/churchlist'
import NavBar from '../components/util/navbar';
import { connect } from 'react-redux';
import { getAllPoints } from '../redux/actions/appActions';
import '../css/app.css';
import { bindActionCreators } from 'redux';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            chartData: {},
            pointsarray : []
        }
    
    }
    
    componentWillMount() {
        
        this.props.getAllPoints();
        this.setState({
            chartData : {
                labels: ['Acts'],
                datasets: [
                    {
                        label: 'Number of Acts',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 2,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data:this.state.pointsarray[1]
                    }
                 ]
                }
            })   
        }

    render() {
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
                    <BarChart chartData={this.state.chartData} />
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

function mapDispathToProps(dispatch) {
    return bindActionCreators({ getAllPoints: getAllPoints}, dispatch)
}



const mapStateToProps  = state => {
    return {
        points: state.app
    }
}

export default connect (mapStateToProps, mapDispathToProps) (App);