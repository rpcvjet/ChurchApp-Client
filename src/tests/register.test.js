import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/register';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { renderComponent } from 'recompose';

describe ('Register label text', () => {

    let register = shallow(<Register fullname={{fullname: 'Joey Holiday'}} /> )

    it('shows text of full name', () => {
        console.log(register.debug());
        expect(register.find('label').at(0).text()).toEqual('Enter Full Name');
    })
    it('shows text of Email address', () => {
        expect(register.find('label').at(1).text()).toEqual('Enter Email Address');
    })
    it('shows text of password', () => {
        expect(register.find('label').at(2).text()).toEqual('Password');
    })
    it('shows text of confirm password', () => {
        expect(register.find('label').at(3).text()).toEqual('Confirm Password');
    })

    describe('when rendering the form', () => {
        it('creates a form component', () => {
            expect(register.find('Form').exists()).toBe(true);
        })
        it('creates a Button', () => {
            expect(register.find('Button').exists()).toBe(true);
        })
    
    })
});




