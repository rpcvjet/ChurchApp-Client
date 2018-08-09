import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';
import sandbox from './sandbox';



describe('when the app mounts', () => {
    let app = shallow(<App />)
    console.log(app.debug());

    it('renders Menu Item 1 ', () => {
        expect(app.find('MenuItem').at(0).exists()).toBe(true)
    }) 
    it('renders menu Item 2 ', () => {
        expect(app.find('MenuItem').at(1).exists()).toBe(true)
    }) 
    it('renders BarChart', () => {
        expect(app.find('BarChart').exists()).toBe(true)
    }) 
    it('renders list of acts', () => {
        expect(app.find('ChurchList').exists()).toBe(true)
    }) 
    it('renders the NavBar', () => {
        expect(app.find('NavBarItem').exists()).toBe(true)
    }) 
}) 



        // it.only('should update the state false', () => {
        //     app.setState({visible : true})
        //     app.find('Sidebar').simulate('click');
        //     expect(app.state().visible).toEqual(false)
        // })
        
    
    


