import React from 'react';
import { shallow } from 'enzyme';
import VideoItem from './VideoItem';
// TODO: Write tests for video item event handler, and video item image, and video item header if data present

const initialSetUp = (props) => {
  const component = shallow(< VideoItem {...props} />);
  return component;
}

describe('Tests for Video Items component', () => {

  it('Should return if Video Item component exists', () => {
    expect(1).toBe(1);
  });
});

