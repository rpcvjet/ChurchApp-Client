import React from 'react';
import { shallow } from 'enzyme';
import {App} from '../components/app';
import {auth, points} from './data/fixtures'

const props = { auth, points };

describe('when the app mounts', () => {
    let app = shallow(<App{...props} />)
    it('renders Menu Item 1 ', () => {
        expect(app.find('MenuItem').at(0).exists()).toBe(true)
    }) 
    it('renders menu Item 2 ', () => {
        expect(app.find('MenuItem').at(1).exists()).toBe(true)
    }) 
    it('renders BarChart', () => {
        expect(app.find('Chart').exists()).toBe(true)
    }) 
    it('renders ChurchList component', () => {
        expect(app.find('ChurchList').exists()).toBe(true)
    })
    it('renders app wrapper', () => {
        expect(app.find('div').at(0).hasClass('app-wrapper')).toBe(true)
    })
    it('renders headersection', () => {
        expect(app.find('div').at(1).hasClass('headersection')).toBe(true)
    })
    it('renders total act message', () => {
        expect(app.find('div').at(2).hasClass('totalactsmessage')).toBe(true)
    })
    it('renders mobile message', () => {
        expect(app.find('div').at(3).hasClass('smallmessage')).toBe(true)
    })
    it('renders data div', () => {
        expect(app.find('div').at(4).hasClass('data')).toBe(true)
    })
    it('renders d3 div', () => {
        expect(app.find('div').at(5).hasClass('d3')).toBe(true)
    })
    it('renders message section div', () => {
        expect(app.find('div').at(6).hasClass('mainsection')).toBe(true)
    })
     
}) 

        
    
    


