import React, { Component } from 'react';
import { Form, Modal, Button, Radio  } from 'semantic-ui-react';
import {Link } from 'react-router-dom';
import '../css/addact.css';


class AddAct extends Component {
  state = {
    text:'',
    value:'',

    date:null,
    open: false
  };


  handleTypeChange = (e, { value }) => this.setState({value})


  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })


  render() {

    const { value, open, size } = this.state;

        console.log(this.state)
    return (
          <div className="actwrapper">
          
            <div className='navicons'>
            <Link to='/'><i className="myicons home icon"></i></Link>
            <Link to='/userdash'><i className="myicons user icon"></i></Link>
            <Link to=''><i className="myicons eject icon"></i></Link>   

            </div>

            <Form size='massive' className='addactform' widths='equal'>
          
                <h1> I commited an act of... </h1>

                 <Form.Group inline>
                  <Form.Radio value='Witness' control={Radio} label="Witness" checked={value === 'Witness'} onChange={this.handleTypeChange}/>
                  <Form.Radio value="Kindness" checked={value === 'Kindness'} onChange={this.handleTypeChange} label="Kindness" />
                  <Form.Radio value="Encouragement"  checked={value === 'Encouragement'} onChange={this.handleTypeChange} label="Encouragement" />

                </Form.Group>
            
                <h2> on </h2>
                        
              <div className="datepicker"  >
                <input 
                type="date" 
                value={this.state.selectedDate}
             />
              </div>

              <h2> by </h2>       
              <Form.TextArea placeholder='explain your act...'
              value={this.state.text}
              onChange={this.handleTextChange}
              
              />  
              <Form.Button onClick={this.show('small')} size='large' color='green' className='actbutton'>Submit</Form.Button>

                <Modal size={size} open={open} onClose={this.close}>
                  <Modal.Header>Submit your Act</Modal.Header>
                  <Modal.Content>
                    <p>Are you sure you want to submit you act?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={this.close} negative>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                  </Modal.Actions>
                </Modal>
        
              </Form>
            

     
       </div>
      
    );
  }

}

export default AddAct;