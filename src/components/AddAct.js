import React, { Component , Fragment} from 'react';
import { Form, Modal, Button, Radio ,Icon, Menu, Segment, Sidebar, TextArea } from 'semantic-ui-react';
import {Link } from 'react-router-dom';
import '../css/addact.css';

import NavBar from '../components/util/navbar'


class AddAct extends Component {
  state = {
    text:'',
    value:'',
    visible: false,
    date:null,
    open: false
  };
  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

    
  handleTypeChange = (e, { value } ) =>  this.setState({value}   )


  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })


  render() {
    
    const { value, open, size, visible } = this.state;
    console.log(this.state)
    return (
      <Fragment>
      <NavBar />

      
        <Sidebar.Pusher>
          <div className="actwrapper">
               
               <div className='navicons'>
               <Icon name='align justify' className='icon' onClick={this.handleButtonClick} ></Icon>
              </div>
            
            <Form size='massive' className='addactform' widths='equal'>
            
              <div className='naviconsMobile'>
               <Icon name='align justify' className='icon' onClick={this.handleButtonClick} ></Icon>
              </div>
           
          
                <h1 className='message1 words'> I commited an act of... </h1>

                  <div className='radioButtonGroup'>
                 <Form.Group inline>
                  <Form.Radio value='Witness' label="Witness" checked={value === 'Witness'} onChange={this.handleTypeChange}/>
                  <Form.Radio value="Kindness" checked={value === 'Kindness'} onChange={this.handleTypeChange} label="Kindness" />
                  <Form.Radio value="Encouragement"  checked={value === 'Encouragement'} onChange={this.handleTypeChange} label="Encouragement" />
                </Form.Group>
                  </div>
                <h2 className='message2 words '>on</h2>
                        
              <div className="datepicker"  >
                <input type="date" value={this.state.selectedDate}/>
              </div>

              <h2 className='message3 words'> by </h2>       
             
             <div className='explainarea'>
              <TextArea placeholder='explain your act...'
              value={this.state.text}
              onChange={this.handleTextChange}
              
              />  
              </div>
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

        </Sidebar.Pusher>
      </Fragment>
    );
  }

}

export default AddAct;