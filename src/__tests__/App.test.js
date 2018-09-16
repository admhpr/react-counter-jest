import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
/**
 * Factory function to create a shallow wrapper for App
 * @param {object} props 
 * @param {object} state
 * @returns {ShallowWrapper} 
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<App {...props}/>);
    if(state){
        wrapper.setState(state);
    }
    return wrapper;
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
    const initialState = wrapper.state('counter');
    expect(initialState).toBe(0);
})

test('clicking the button increments the counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByAttr(wrapper, 'increment-button');
    button.simulate('click');
    wrapper.update();

    const counterDisplay = findByAttr(wrapper, 'counter');
    expect(counterDisplay.text()).toContain( counter + 1 );
})

test('clicking the button decrements the counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByAttr(wrapper, 'decrement-button');
    button.simulate('click');

    const counterDisplay = findByAttr(wrapper, 'counter');
    expect(counterDisplay.text()).toContain( counter - 1 )
})

test('error message is hidden if not needed', () => {
    const wrapper = setup();
    const errorDiv = findByAttr(wrapper, 'error-message');

    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
})

test('counter is not decremented if already at 0', () => {
    const counter = 0
    const wrapper = setup(null, { counter });
    const button = findByAttr(wrapper, 'decrement-button');
    button.simulate('click');
    const counterDisplay = findByAttr(wrapper, 'counter');
    expect(counterDisplay.text()).toContain(counter)
})
