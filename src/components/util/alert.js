import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';


class AlertMessage extends Component {

  
    render() {
        return (
            <Alert bsStyle="success">
              <strong>Awesome!</strong> Your act has been recorded!
            </Alert>
        );
      }
  
    
  }
  
  export default AlertMessage;