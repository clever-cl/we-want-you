import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import SidebarOptions from '../../components/SidebarOptions';

describe('Test in <SidebarOptions />', () => {
  test('should show component correct', () => {
    const wrapper = shallow(<SidebarOptions />)
    expect(wrapper).toMatchSnapshot()
  })


})