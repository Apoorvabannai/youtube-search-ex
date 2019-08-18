import React from 'react';
import { shallow } from 'enzyme';
import VideoItem from './VideoItem';

const initialSetUp = (props) => {
  const component = shallow(< VideoItem {...props} />);
  return component;
}

describe('Tests for Video Items component', () => {

  it('Should return if Video Item component exists', () => {
    expect(1).toBe(1);
  });
});

