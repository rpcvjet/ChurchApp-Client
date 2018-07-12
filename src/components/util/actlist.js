import React, { Component } from 'react';
import { List } from 'semantic-ui-react'



class Actlist extends Component {
    render() {
        return(
            <div>
              <List relaxed>
              <List.Item>
                <List.Content>
                    <List.Header as='a'>Daniel Louise</List.Header>
                    <List.Description>
                    Last seen watching{' '}
                    <a>
                        <b>Arrested Development</b>
                    </a>{' '}
                    just now.
                    </List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    <List.Header as='a'>Stevie Feliciano</List.Header>
                    <List.Description>
                    Last seen watching{' '}
                    <a>
                        <b>Bob's Burgers</b>
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