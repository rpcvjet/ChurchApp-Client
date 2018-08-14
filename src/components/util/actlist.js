import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'



class Actlist extends Component {
    render() {

        console.log('this.props in actlist', this.props)
        return(
            <div className='thelist'>
                 <ListGroup className='actlist'>{
                            this.props.userlist && this.props.userlist.map( list => {
                            return (
                                <ListGroupItem  key={list.actsid}>{list.description}</ListGroupItem>
                            )
                        })
                 }
                    
                </ListGroup>
            </div>
        )
    }


}

export default Actlist;