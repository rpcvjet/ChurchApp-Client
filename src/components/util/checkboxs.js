import React, { Component } from 'react';
import {FormGroup, Checkbox} from 'react-bootstrap';

class CheckboxGroup extends Component {
    
    render(){
        return(

            <FormGroup className='checkboxes' >
                <Checkbox value='Witness' onChange={this.props.filter} className='check' name='filterButtonGroup' >Witness</Checkbox> 
                <Checkbox value='Encouragement' onChange={this.props.filter} className='check'name='filterButtonGroup' >Encouragement</Checkbox>
                <Checkbox value='Kindness' onChange={this.props.filter} className='check' name='filterButtonGroup' >Kindness</Checkbox>
            </FormGroup>
        )
    }
}

export default CheckboxGroup;


