import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar';

describe('Test in <Header />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper).toMatchSnapshot()
  })


})