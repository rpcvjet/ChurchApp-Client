import React, { Component } from 'react';
import BarChart from './util/chart';
import ChurchList from './util/churchlist'
import {Link} from 'react-router-dom';
import {Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import '../css/app.css';

class App extends Component {

    state = { 
        visible: false,
    
    }

    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state;
        
        return(
            <Sidebar.Pushable as={Segment}>
          <Sidebar className='thebar'
            as={Menu}
            animation='overlay'
            duration='9100'
            direction='left'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            >
             
            <Menu.Item>           
            <Link to='/userdash'><Icon className='user' name='user'/> MyActs</Link>            
            </Menu.Item>
            
            <Menu.Item>
              <Link to=''><Icon name='sign out alternate' size='big'/>LogOut</Link>
            </Menu.Item>
          
          </Sidebar>

          <Sidebar.Pusher>
            <div className="app-wrapper">
                
                <div className='headersection'>

                <Icon name='align justify' className='icon' onClick={this.handleButtonClick} ></Icon>
                   
                    <div className='totalactsmessage'>Acts completed: 100</div>
                    <div className='smallmessage'>Acts: 100</div>
                </div>
               
                <div className='data'>
                    <div className='d3'>
                    <BarChart  />
                    </div>
                
                </div>
                <div className='mainsection'>
                    <ChurchList />
                </div>
        
            </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
            
        )
    }

}

export default App;