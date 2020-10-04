import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Body from '../../components/Body';

describe('Test in <Body />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<Body />)
    expect(wrapper).toMatchSnapshot()
  })


})