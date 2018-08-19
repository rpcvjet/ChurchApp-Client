import React, { Component, Fragment } from 'react'
import ActList from '../components/util/actlist'
import NavBar from '../components/util/navbar'
import { bindActionCreators } from 'redux';
import { getUserPoints, getActList, addFilterType, removeFilterType } from '../redux/actions/userdashActions';
// import  CheckboxGroup  from '../components/util/checkboxs';
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

   
  render() {
      
    console.log('this.props in userdash', this.props)
    
    
    return (
                <Fragment>
                
                <NavBar />

                <div className='mobilesidebar'>
                    {/* <CheckboxGroup /> */}
                </div>


                
                <div className='wrapper'>
                    <div className='header'> 
                        
                        <h1 className='desktopMessage'>{this.props.auth.user.user.fullname}, you've commited {this.props.userpoints.userpoints} Acts!</h1>
                        <h1 className='mobileMessage'>Acts: {this.props.userpoints.userpoints}</h1>
                      
                    </div>

                    <div className='sidebar'>
                            <FormGroup className='checkboxes' >
                        <Checkbox value='witness' onClick={ (e) => this.handleTypeFilter(e)} className='check' name='filterButtonGroup' >Witness</Checkbox> 
                        <Checkbox value='Encouragement' onClick={ (e) => this.handleTypeFilter(e)} className='check'name='filterButtonGroup' >Encouragement</Checkbox>
                        <Checkbox value='Kindness'  onClick={ (e) => this.handleTypeFilter(e)} className='check' name='filterButtonGroup' >Kindness</Checkbox>
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