import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Login from '../../components/Login';

describe('Test in <Login />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
  })


})