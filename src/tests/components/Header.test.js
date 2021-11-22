import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Test in <Header />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })


})