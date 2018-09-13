import React, { Component , Fragment} from 'react';
import {FormControl, FormGroup, Radio, Button, Modal} from 'react-bootstrap';
import NavBar from '../components/util/navbar';
import Alert from '../components/util/alert';
import { Redirect } from 'react-router-dom';

import {sendActToDB} from '../redux/actions/actActions';
import { connect } from 'react-redux';

import '../css/addact.css';
import { bindActionCreators } from 'redux';


class AddAct extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      text:'',
      actType:'',
      show: false,
      charsleft: 100,
      showAlert: false,
    };
    this.handleHide = this.handleHide.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    
  handleTypeChange = (event) => {
    this.setState({actType: event.target.value })
  }


  handleTextChange = (event) => {
    let input = event.target.value
    this.setState({text: event.target.value})
    this.setState({ charsleft: 100 - input.length})
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleSubmit = () => {   
     const actdata = {
      description: this.state.text,
      typeofact: this.state.actType,
      userid: this.props.auth.user._id
     }
     //send to database now
     this.props.sendActToDB(actdata)
     this.handleHide();
     this.setState({text:''})
     this.setState({actType:''})
     this.setState({showAlert: true})
  }

  getValidationState = () => {
    const textlength = this.state.text.length;
    if(textlength >= 100)  return 'error';
    else if (textlength >= 15) return 'success';
    return null
  }

  showAlert = () => {
    if(!this.state.showAlert) {
        return <div></div>
      }
    
    else {
      
      return(
      <div className='alertdiv'>
      <Alert />    
      </div>
      )    
      
    }
  }

  render() {    
    if(!this.props.auth.isAuthenticated){
      return <Redirect to='/login' />
  }
    const { text, actType} = this.state;
    const isEnabled = text.length > 15 && actType.length > 0;

    return (  
      <Fragment>

        <NavBar />
            {this.showAlert()}
              
            <form >
                <h1 className='message1 words'> I commited an act of... </h1>

                  <FormGroup className='radioButtonGroup'>
                    <Radio inline value="Witness" onChange={this.handleTypeChange} name='radioButtonGroup'>Witness</Radio>
                    <Radio inline value="Kindness" onChange={this.handleTypeChange} name='radioButtonGroup'>Kindness</Radio>
                    <Radio inline value="Encouragement" onChange={this.handleTypeChange}  name='radioButtonGroup'>Encouragement</Radio>
                  </FormGroup>

                <h2 className='message3 words'>by</h2>       
             
                <div >
                <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                  <FormControl 
                  maxLength="100"
                  className='explainarea' 
                  bsSize="large" componentClass="textarea" 
                  placeholder="Explain you act..." 
                  value={this.state.text}
                  onChange={this.handleTextChange}  
                             
                  /> 
                  <p>{this.state.charsleft} /100</p>
                 </FormGroup>     
              </div>
              
                    <div className="modal-container" style={{ height: 200 }}>
          <Button
            disabled = {!isEnabled}
            className='submitbutton'
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
           Submit
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to submit? <br />
              You act will be shared with the entire church.
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" onClick={this.handleSubmit}>Submit</Button>
              <Button onClick={this.handleHide}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>
              </form>

      </Fragment>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({sendActToDB}, dispatch)
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
      act: state.act
    }
}

// export default AddAct;
export default connect(mapStateToProps, mapDispatchToProps)(AddAct);