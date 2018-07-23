import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/register';


describe ('Register label text', () => {

    let register = shallow(<Register /> )

    it('shows text of full name', () => {
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

        it('renders the Form Field component', () => {
            expect(register.find('FormField').exists()).toBe(true);
        })
        it('renders the Form Input component', () => {
            expect(register.find('FormInput').exists()).toBe(true);
        })
        it('creates a Button', () => {
            expect(register.find('Button').exists()).toBe(true);
        })
    
    })

    describe('when typing in data', () => {
            let myname = 'John Doe'
        beforeEach(() => {
            register.find('FormInput').at(0).simulate('change', {
                target: { value :myname }
            });
        });
        it('updates the fullname state', () => {
            expect(register.state().fullname).toEqual(myname);
        })
        let myemail = 'johnnybravo@gmail.com'

        beforeEach(() => {
            register.find('FormInput').at(1).simulate('change', {
                target: { value :myemail }
            });
        });
        it('updates the email state', () => {
            expect(register.state().email).toEqual(myemail);
        })

        //password test
        let mypassword = 'somepassword!#@'

        beforeEach(() => {
            register.find('FormInput').at(2).simulate('change', {
                target: { value :mypassword }
            });
        });
        it('updates the password state', () => {
            expect(register.state().password).toEqual(mypassword);
        })
        //confirm password test
        let myconfirmationpassword = 'anothercrazypassword!#@'


        beforeEach(() => {
            register.find('FormInput').at(3).simulate('change', {
                target: { value :myconfirmationpassword }
            });
        });
        it('updates the password state', () => {
            expect(register.state().confirmpassword).toEqual(myconfirmationpassword);
        })



    })
});




