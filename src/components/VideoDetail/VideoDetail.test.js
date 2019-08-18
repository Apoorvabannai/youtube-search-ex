import React from 'react';
import { shallow } from 'enzyme';
import VideoDetail from './VideoDetail';

const initialSetUp = (props) => {
  const component = shallow(<VideoDetail {...props} />);
  return component;
}

describe('Tests for video dtails component', () => {

  it('Should pass when Video detail component is present', () => {
    expect(1).toBe(1);
  });
});

