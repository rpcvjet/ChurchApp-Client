import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'



class Actlist extends Component {
    render() {

        return(
            <div className='thelist'>
                 <ListGroup className='actlist'>
                 {
                            this.props.showFiltertedActs && this.props.showFiltertedActs.map( list => {
                            return (
                                <ListGroupItem href="#" key={list._id}>{list.description}</ListGroupItem>
                            )
                        })

                 }
                    
                </ListGroup>
            </div>
        )
    }


}

export default Actlist;