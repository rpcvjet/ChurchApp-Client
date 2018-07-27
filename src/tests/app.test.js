import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';
import sandbox from './sandbox';



describe('when the app mounts', () => {
    let app = shallow(<App />)
    console.log(app.debug());

    it('renders Sidebar ', () => {
        expect(app.find('Sidebar').exists()).toBe(true)
    }) 
    it('renders Menu Item 1 ', () => {
        expect(app.find('MenuItem').at(0).exists()).toBe(true)
    }) 
    it('renders menu Item 2 ', () => {
        expect(app.find('MenuItem').at(1).exists()).toBe(true)
    }) 
    it('renders Sidebar Pusher', () => {
        expect(app.find('SidebarPusher').at(1).exists()).toBe(true)
    }) 
    it('renders BarChart', () => {
        expect(app.find('BarChart').exists()).toBe(true)
    }) 
    it('renders list of acts', () => {
        expect(app.find('ChurchList').exists()).toBe(true)
    }) 

    it('renders the data div', () => {
        expect(app.find('Icon').at(2).hasClass('icon')).toEqual(true)
    })
    it('expects visable state to be false', () => {
        expect(app.state('visible')).toEqual(false);
    })

    describe('when button is clicked', () => {
        it('should update the state to true', () => {
            expect(app.state().visible).toEqual(false)
            app.find('Icon').at(2).simulate('click');
            expect(app.state().visible).toEqual(true)
           
        })

        // it.only('should update the state false', () => {
        //     app.setState({visible : true})
        //     app.find('Sidebar').simulate('click');
        //     expect(app.state().visible).toEqual(false)
        // })
        
    })
    
})

