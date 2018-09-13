import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
/**
 * Factory function to create a shallow wrapper for App
 * @param {object} props 
 * @param {any} state
 * @returns {ShallowWrapper} 
 */
const setup = (props={}, state=null) => {
    return shallow(<App {...props}/>)
}
/**
 * Find the data-test attribute on component
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 */
const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'app');
    expect(appComponent.length).toBe(1);
})

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
})

test('renders counter display', () => {
    const wrapper = setup();
    const counter = findByAttr(wrapper, 'counter');
    expect(counter.length).toBe(1);
})

test('counter starts at 0', () => {
    const wrapper = setup();
    initialState = wrapper.state('counter');
    expect(initialState).toBe(0)
})

test('clicking the button increments the counter display', () => {

})