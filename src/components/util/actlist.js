import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'



class Actlist extends Component {

    
      

    render() {


        // function alertClicked() {
        //     alert('You clicked the third ListGroupItem');
        //   }

        return(
            <div className='thelist'>
                 <ListGroup className='actlist'>
                    <ListGroupItem href="#link1">You commited an act of Kindness</ListGroupItem>
                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                    <ListGroupItem href="#link2">Link 3</ListGroupItem>
                </ListGroup>
            </div>
        )
    }


}

export default Actlist;