import React from 'react';
import { shallow } from 'enzyme';
import dataTestAttribute from '../../Utils/utils';
import SearchBar from './SearchBar';

const baseSetUp = (props={}) => {
  const component = shallow(<SearchBar {...props} />);
  return component;
};

describe('Testing SearchBar', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = baseSetUp();
    return wrapper;
  });

  it('Should render search bar component', () => {
    const searchBarComponentDiv = dataTestAttribute(wrapper, 'search-bar-main-div');
    expect(searchBarComponentDiv.length).toEqual(1);
  });

  it('Should see if the pa tag is present, and the content is present', () => {
    const contentInsideTag = dataTestAttribute(wrapper, 'search-bar-text-tag');
    expect(contentInsideTag.length).toBe(1);
    expect(contentInsideTag.props().children.props.placeholder).toBe('Search Bar');
    // expect(contentInsideTag.text()).toBe('Search Bar');
  });
});
