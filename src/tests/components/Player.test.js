import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Player from '../../components/Player';

describe('Test in <Header />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<Player />)
    expect(wrapper).toMatchSnapshot()
  })


})