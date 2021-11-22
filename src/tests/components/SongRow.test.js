import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import SongRow from '../../components/SongRow';

describe('Test in <SongRow />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<SongRow />)
    expect(wrapper).toMatchSnapshot()
  })


})