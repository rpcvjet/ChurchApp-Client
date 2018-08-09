import React, { Component , Fragment} from 'react';
import {FormControl, FormGroup, Radio, Button} from 'react-bootstrap';
import NavBar from '../components/util/navbar'
import '../css/addact.css';


class AddAct extends Component {
  state = {
    text:'',
    actType:'',
    date:null,
  };
 

    
  handleTypeChange = (event) => {
    this.setState({actType: event.target.value })
  }


  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }



  render() {
        console.log(this.state)
    return (  
      <Fragment>

        <NavBar />
              
            <form>
                <h1 className='message1 words'> I commited an act of... </h1>

                  <FormGroup className='radioButtonGroup'>
                    <Radio inline value="Witness" onChange={this.handleTypeChange} name='radioButtonGroup'>Witness</Radio>
                    <Radio inline value="Kindness" onChange={this.handleTypeChange} name='radioButtonGroup'>Kindness</Radio>
                    <Radio inline value="Encouragement" onChange={this.handleTypeChange}  name='radioButtonGroup'>Encouragement</Radio>
                  </FormGroup>

                <h2 className='message2 words'>on</h2>
                        
                <div className="datepicker"  >
                  <input type="date" value={this.state.selectedDate}/>
                </div>

                <h2 className='message3 words'>by</h2>       
             
                <div className='explainarea'>
                  <FormControl componentClass="textarea" placeholder="textarea" 
                    value={this.state.text}
                    onChange={this.handleTextChange}             
                  /> 
                      
              </div>
              
              <Button>Submit</Button>

              
              </form>

      </Fragment>
    );
  }

}

export default AddAct;