import React from 'react';
import { shallow } from 'enzyme';
import AddAct from '../components/AddAct';

describe.only('when the app mounts', () => {
    let addact = shallow(<AddAct />)
=
    it('verifys date state to false', () => {
        expect(addact.state().date).toEqual(null);
    })
    it('renders the form', () => {
        expect(addact.find('form').exists()).toBe(true);
    })
    it('renders Radio button 1', () => {
        expect(addact.find('Radio').at(0).exists()).toBe(true)
    }) 
    it('renders Radio button  2 ', () => {
        expect(addact.find('Radio').at(1).exists()).toBe(true)
    }) 
    it('renders Radio button  3 ', () => {
        expect(addact.find('Radio').at(1).exists()).toBe(true)
    }) 
  
    it('renders the radio group  div', () => {
        expect(addact.find('FormGroup').hasClass('radioButtonGroup')).toEqual(true)
    })

    describe('TESTING STATE CHANGE', () => {
            let textarea = 'I did a great thing the other day'
        beforeEach(() => {
            addact.find('FormControl').simulate('change', {
                target: { value :textarea }
            });
        });
        it('updates the text state', () => {
            expect(addact.state().text).toEqual(textarea);
        })
        let updatedActType = 'Witness';
        beforeEach(() => {
          
            addact.find('Radio').at(0).simulate('change', {
                target: { value :updatedActType }
            });
        }); 
        it('updates the actType state', () => {           
         expect(addact.state().actType).toEqual(updatedActType);

        })

    })//end of describe block
    // describe('TESTING CLOSE BUTTON CLICK', () => {
    //     it('updates the open state', () => {
    //         expect(addact.setState({ open: true}))
    //         addact.find('Button').at(0).simulate('click')
    //         expect(addact.state().open).toEqual(false);
    //     })
    // })


})