import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import ActList from '../components/util/actlist'

import { Button, Icon, Menu, Segment, Sidebar, Checkbox } from 'semantic-ui-react'
import '../css/userdash.css';

 class UserDash extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
       
        <Sidebar.Pushable as={Segment}>
          <Sidebar className='thebar'
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
             
            <Menu.Item>
            
            <Link to='/'><Icon className='homeicon' name='home' size='big' />Home</Link>
            
            </Menu.Item>

             <Menu.Item className='addactNavbar'>
            <Link to='/addact'><Icon name='edit' size='large'/>Add Act</Link>

            </Menu.Item>

            <Menu.Item>
            <Link to=''><Icon name='sign out alternate' size='big'/>LogOut</Link>

            </Menu.Item>

           
          </Sidebar>

            <Sidebar.Pusher>
                <div className='wrapper'>
                    <div className='header'> 
                        <Icon name='align justify' className='icon' onClick={this.handleButtonClick}></Icon>
                        
                        <h1 className='desktopMessage'>You've Commited 10 Acts!</h1>
                        <h1 className='mobileMessage'>Acts: 10</h1>
                        <div className='addactbutton'> 
                            <Link to='/addact'>
                            <Button  size='big'color='yellow'>Add Act</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='sidebar'>

                        <div className='checkboxes'>
                            <Checkbox className='check' label='Kindness' defaultChecked />
                            <Checkbox className='check' label='Witness' defaultChecked />
                            <Checkbox className='check' label='Encouragement' defaultChecked />
                        </div>
                    </div>

                    <div className='main'>
                        <ActList/>

                    </div>

                </div>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default UserDash;