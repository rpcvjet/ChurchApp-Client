import React from 'react';
import { shallow } from 'enzyme';
import Userdash from '../components/userdash';

describe('when the form mounts', () => {
    let userdash = shallow(<Userdash />)

    it('renders Menu Item 1 ', () => {
        expect(userdash.find('MenuItem').at(0).exists()).toBe(true)
    }) 
    it('renders menu Item 2 ', () => {
        expect(userdash.find('MenuItem').at(1).exists()).toBe(true)
    }) 
    it('renders NavBar', () => {
        expect(userdash.find('NavBarItem').exists()).toBe(true)
    }) 
    it('should render correct text', () => {
        expect(userdash.find('h1').at(1).text()).toEqual('Acts: 10')
    })
    it('should render correct text', () => {
        expect(userdash.find('h1').at(0).text()).toEqual('You\'ve Commited 10 Acts!')
    })
    it('should render checkbox 1', () => {
        expect(userdash.find('Checkbox').at(0).exists()).toBe(true)
    }) 
    it('should render Checkbox 2', () => {
        expect(userdash.find('Checkbox').at(1).exists()).toBe(true)
    }) 
    it('should render Checkbox 3', () => {
        expect(userdash.find('Checkbox').at(2).exists()).toBe(true)
    }) 
    it('the act list mounts', () => {
        expect(userdash.find('Actlist').exists()).toBe(true)
    })


    
})