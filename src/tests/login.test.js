import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/login';

describe('When the login form mounts', () => {

        let login = shallow(<Login />)
        let container;
        console.log(login.debug());
    it('it renders the Login Form', () => {
            expect(login.find('Form').exists()).toBe(true);
        })
    it('it renders the login header', () => {
        expect(login.find('h1').exists()).toBe(true);
    })
    it('test rendering Form Field 1', () => {
        expect(login.find('FormField').at(0).exists()).toBe(true);       
    })
    it('test rendering Form Field 2', () => {
        expect(login.find('FormField').at(1).exists()).toBe(true);       
    })
    it('test email label', () => {
        expect(login.find('label').at(0).text()).toEqual('Email');       
    })
    it('test password label', () => {
        expect(login.find('label').at(1).text()).toEqual('Password');       
    })
    it('test Button renders', () => {
        expect(login.find('FormButton').exists()).toBe(true);       
    })

    it('test rendering Form Input 1', () => {
        expect(login.find('FormInput').at(0).exists()).toBe(true);       
    })
    it('test rendering Form Input 2', () => {
        expect(login.find('FormInput').at(1).exists()).toBe(true);       
    })

    describe('testing saving state in inputs', () => {
        
        //email state test
        let email = 'thi!sismy&email@email.com';

        beforeEach(() => {
            login.find('FormInput').at(0).simulate('change', {
                target: {value : email}
            })
        })

        it('updates email state', () => {
            expect(login.state().email).toEqual(email);
        })
        //password state test
        let password = 'thisdfismypassword';

        beforeEach(() => {
            login.find('FormInput').at(1).simulate('change', {
                target: {value : password}
            })
        })

        it('updates password state', () => {
            expect(login.state().password).toEqual(password);
        })
        
    })
})