import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react';
import '../../css/sidebar.css'



class SideBar extends Component {

    render (){
        return (
            <div className='sidebar-wrapper'>

                <Link to ='/'>
                <div className='title'>
                Church App
                </div>
                </Link>

                <div className='checkboxes'>
                <Checkbox className='check' label='Kindness' defaultChecked />
                <Checkbox className='check' label='Witness' defaultChecked />
                <Checkbox className='check' label='Encouragement' defaultChecked />
                </div>


            </div>
        )
    }

}

export default SideBar;