import React, { Component, Fragment } from 'react';
import BarChart from './util/chart';
import ChurchList from './util/churchlist'
import NavBar from '../components/util/navbar';
import { connect } from 'react-redux';
import { getAllPoints, getAllActs } from '../redux/actions/appActions';
import '../css/app.css';
import { bindActionCreators } from 'redux';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            chartData: {},
        }
    
    }
    
    componentWillMount() {
        
        this.props.getAllPoints();
        this.props.getAllActs();
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
                        data:[20]
                    }
                 ]
                }
            })   
        }

    render() {
        // console.log(this.props)
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
                    <ChurchList allacts={this.props.churchlist} />
                </div>
        
            </div>
            </Fragment>
        )
    }

}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ getAllPoints, getAllActs}, dispatch)
}



const mapStateToProps  = state => {
    return {
        points: state.app,
        churchlist: state.churchlist.churchlist
    }
}

export default connect (mapStateToProps, mapDispathToProps) (App);