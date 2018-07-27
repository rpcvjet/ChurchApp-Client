import React from 'react';
import { shallow } from 'enzyme';
import AddAct from '../components/AddAct';

describe('when the app mounts', () => {
    let addact = shallow(<AddAct />)
    console.log(addact.debug());

    it('verifys the visible state to false', () => {
        expect(addact.state().visible).toEqual(false);
    })
    it('verifys open state to false', () => {
        expect(addact.state().open).toEqual(false);
    })
    it('verifys date state to false', () => {
        expect(addact.state().date).toEqual(null);
    })
    it('renders Menu Item 1 ', () => {
        expect(addact.find('MenuItem').at(0).exists()).toBe(true)
    }) 
    it('renders menu Item 2 ', () => {
        expect(addact.find('MenuItem').at(1).exists()).toBe(true)
    }) 
    it('renders Sidebar Pusher', () => {
        expect(addact.find('SidebarPusher').at(1).exists()).toBe(true)
    }) 
    it('renders the radio group  div', () => {
        expect(addact.find('div').at(3).hasClass('radioButtonGroup')).toEqual(true)
    })
    it('renders the Modal', () => {
        expect(addact.find('Modal').exists()).toEqual(true)
    })
    it('renders the Form', () => {
        expect(addact.find('Form').exists()).toEqual(true)
    })

    describe('TESTING STATE CHANGE', () => {
            let textarea = 'I did a great thing the other day'
        beforeEach(() => {
            addact.find('TextArea').simulate('change', {
                target: { value :textarea }
            });
        });
        it('updates the text state', () => {
            expect(addact.state().text).toEqual(textarea);
        })
        it('updates the vaule state', () => {

            expect(addact.setState({value: ''}))
            addact.find('FormRadio').at(0).simulate('click')
            expect(addact.state().value).toEqual('Witness');

        })

    })//end of describe block
    describe('TESTING CLOSE BUTTON CLICK', () => {
        it('updates the open state', () => {
            expect(addact.setState({ open: true}))
            addact.find('Button').at(0).simulate('click')
            expect(addact.state().open).toEqual(false);
        })
    })

    describe('TESTING NAV BUTTON', () => {
        it('should update the state to true', () => {
            expect(addact.state().visible).toEqual(false)
            addact.find('Icon').at(3).simulate('click');
            expect(addact.state().visible).toEqual(true)
           
        })
    })

})