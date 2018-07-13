import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react'



class Actlist extends Component {
    render() {
        return(
            <div className='thelist'>
              <List animated divided size='massive' >
              <List.Item>
              <List.Content className='editbutton' floated='right'>
                <Button size='big'>Edit</Button>
              </List.Content>
                <List.Content>

                    <List.Description>
                    You performed an act of {' '}
                    <a>
                        <b>Kindness</b>
                    </a>{' '}
                    just now.
                    </List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content className='editbutton' floated='right'>
                <Button size='big'>Edit</Button>
              </List.Content>
                <List.Content>
                    <List.Description>
                    You performed an act of {' '}
                    <a>
                        <b>Witness</b>
                    </a>{' '}
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