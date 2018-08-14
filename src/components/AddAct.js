import React, { Component , Fragment} from 'react';
import {FormControl, FormGroup, Radio, Button, Modal} from 'react-bootstrap';
import NavBar from '../components/util/navbar'
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
      show: false
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
    this.setState({text: event.target.value})
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleSubmit = () => {      
     const actdata = {
      description: this.state.text,
      typeofact: this.state.actType,
      userid: this.props.auth.user.user.userid
     }
     //send to database now
     this.props.sendActToDB(actdata)
     this.handleHide();
     this.setState({text:'', actType:''})
     
  }

  render() {
    return (  
      <Fragment>

        <NavBar />
              
            <form >
                <h1 className='message1 words'> I commited an act of... </h1>

                  <FormGroup className='radioButtonGroup'>
                    <Radio inline value="Witness" onChange={this.handleTypeChange} name='radioButtonGroup'>Witness</Radio>
                    <Radio inline value="Kindness" onChange={this.handleTypeChange} name='radioButtonGroup'>Kindness</Radio>
                    <Radio inline value="Encouragement" onChange={this.handleTypeChange}  name='radioButtonGroup'>Encouragement</Radio>
                  </FormGroup>

                {/* <h2 className='message2 words'>on</h2>
                        
                <div className="datepicker"  >
                  <input type="date" value={this.state.selectedDate}/>
                </div> */}

                <h2 className='message3 words'>by</h2>       
             
                <div className='explainarea'>
                  <FormControl componentClass="textarea" placeholder="textarea" 
                    value={this.state.text}
                    onChange={this.handleTextChange}             
                  /> 
                      
              </div>
              
                    <div className="modal-container" style={{ height: 200 }}>
          <Button
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
              Are you sure you want to submit?
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