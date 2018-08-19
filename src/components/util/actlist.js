import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'



class Actlist extends Component {
    render() {

        console.log('this.props in actlist', this.props.showFiltertedActs)

        return(
            <div className='thelist'>
                 <ListGroup className='actlist'>
                 {
                            this.props.showFiltertedActs && this.props.showFiltertedActs.map( list => {
                            return (
                                <ListGroupItem href="#" key={list.actsid}>{list.description}</ListGroupItem>
                            )
                        })

                 }
                    
                </ListGroup>
            </div>
        )
    }


}

export default Actlist;