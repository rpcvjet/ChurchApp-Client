import React, { Component, Fragment } from 'react'
import ActList from '../components/util/actlist'
import NavBar from '../components/util/navbar'
import { bindActionCreators } from 'redux';
import { getUserPoints, getActList, addFilterType, removeFilterType } from '../redux/actions/userdashActions';
import {FormGroup, Checkbox} from 'react-bootstrap';

import { connect } from 'react-redux';

import '../css/userdash.css';

 class UserDash extends Component {
  
    componentWillMount(){
        this.props.getUserPoints(this.props.auth.user.user.userid);
        this.props.getActList(this.props.auth.user.user.userid);
    }

    componentWillReceiveProps(props) {

        let newarray = props.userlist
        this.setState({ useracts: newarray})
    }

    handleTypeFilter =(event) => {
      let priceType = event.target.value
      if(event.target.checked) {
          this.props.addFilterType(priceType)
      }
      else {
          this.props.removeFilterType(priceType)
      }

    }

    handleKindnessFilter =(event) => {
        let kindness = event.target.value
        if(event.target.checked) {
            this.props.addFilterType(kindness)
        }
        else {
            this.props.removeFilterType(kindness)
        }
  
      }

    handleEncouragementFilter =(event) => {
        let encouragement = event.target.value
        if(event.target.checked) {
            this.props.addFilterType(encouragement)
        }
        else {
            this.props.removeFilterType(encouragement)
        }
  
      }

   
  render() {    
    
    return (
                <Fragment>
                
                <NavBar />

                <div className='mobilesidebar'>
                <FormGroup className='checkboxes' >
                                <Checkbox inline value='Witness' onClick={ (e) => this.handleTypeFilter(e)} className='check' name='filterButtonGroup' >Witness</Checkbox> 
                                <Checkbox inline value='Kindness'  onClick={ (e) => this.handleKindnessFilter(e)} className='check' name='filterButtonGroup' >Kindness</Checkbox>
                                <Checkbox inline value='Encouragement' onClick={ (e) => this.handleEncouragementFilter(e)} className='check'name='filterButtonGroup' >Encouragement</Checkbox>
                             </FormGroup>
                </div>


                
                <div className='wrapper'>
                    <div className='header'> 
                        
                        <h1 className='desktopMessage'>{this.props.auth.user.user.fullname}, you've commited {this.props.userpoints.userpoints} Acts!</h1>
                        <h1 className='mobileMessage'>Acts: {this.props.userpoints.userpoints}</h1>
                      
                    </div>

                    <div className='sidebar'>
                            <FormGroup className='checkboxes' >
                                <Checkbox value='Witness' onClick={ (e) => this.handleTypeFilter(e)} className='check' name='filterButtonGroup' >Witness</Checkbox> 
                                <Checkbox value='Kindness'  onClick={ (e) => this.handleKindnessFilter(e)} className='check' name='filterButtonGroup' >Kindness</Checkbox>
                                <Checkbox value='Encouragement' onClick={ (e) => this.handleEncouragementFilter(e)} className='check'name='filterButtonGroup' >Encouragement</Checkbox>
                             </FormGroup>
                    </div>

                    <div className='main'>
                        
                        <ActList  showFiltertedActs={this.props.showFiltertedActs}/>

   
                    </div>

                </div>
         </Fragment>
    )
  }
}


function mapDispatchToProps (dispatch) {
    return bindActionCreators({getUserPoints, getActList, addFilterType, removeFilterType }, dispatch)
} 


const mapStatetoProps = state => {
    return {
        auth: state.auth,
        userpoints: state.userdash,
        userlist: state.userlist,
        filters: state.filters,
        
    }
}

export default connect (mapStatetoProps, mapDispatchToProps)(UserDash);