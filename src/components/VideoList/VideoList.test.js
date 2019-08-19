import React from 'react';
import { shallow } from 'enzyme';
import dataTestAttribute from '../../Utils/utils';
import VideoList from './VideoList';

const initialSetup = (props) => {
  const component = shallow(<VideoList {...props} />);
  return component;
};

describe('Testing Video List Component', () => {

  describe('Tests For Video List Component with props passed', () => {
    let wrapper;
    beforeEach( () => {
      const props = {
        videos: [
        {
          etag: "0UM_wBUsFuT6ekiIlwaHvyqc80M/sBzXHnJ5Z0c6dmmpDWvyI0RnTAo",
          id: {kind: "youtube#video", videoId: "zO1ahn9y7VI"},
          kind: "youtube#searchResult",
          snippet: {
            channelId: "UCayKykhWiDHa0F0qTaksCNQ",
            channelTitle: "SMD CREATIONS's",
            description: "CASTING : DVS HARI CAMERA:MAHESH VEMULA CHOREOGRAPHY:VENKAT .R EDITING : VIRAT CREATIONS.",
            liveBroadcastContent: "none"
          },
          publishedAt: "2017-08-31T21:05:10.000Z"
        }
      ]
    };
      wrapper = initialSetup(props);
      return wrapper;
    });
    it('Should render true when we pass in props to it', () => {
      const elementExists = dataTestAttribute(wrapper, 'video-list-component-main-div');
      expect(elementExists.props().children.length).toBe(1);
    });  
  });
  
  describe('Video List Components With Out Props', () => {
    
    let wrapper;
    beforeEach(()=>{
      wrapper = initialSetup();
      return wrapper;
    });
  
    it('Should render false if the VideoList component exists', () => {
      const videoListCompNoProps = dataTestAttribute(wrapper, 'video-list-component-main-div');
      expect(videoListCompNoProps.props().children.length).toBe(0);
    });
  });
});