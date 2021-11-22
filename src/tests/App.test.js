import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import App from '../App';

describe('Test in <App />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })


})
