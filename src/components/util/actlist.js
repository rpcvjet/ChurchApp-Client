import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react'



class Actlist extends Component {
    render() {
        return(
            <div className='thelist'>
              <List animated divided size='massive' >
              <List.Item>
              <List.Content className='editbutton' floated='right'>
              </List.Content>
                <List.Content className='listcontent'>

                    <List.Description>
                    <h3>You performed an act of Kindness  just now.</h3>
                    </List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content className='editbutton' floated='right'>
              </List.Content>
                <List.Content>
                    <List.Description>
                    You performed an act of
                    <a>
                        <b>Witness</b>
                    </a>
                    10 hours ago.
                    </List.Description>
                </List.Content>
                </List.Item>

              </List>
            </div>
        )
    }


}

export default Actlist;