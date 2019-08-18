import React from 'react';
import  VideoItem from '../VideoItem/VideoItem';
import PropTypes from 'prop-types';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItemList = videos.map((video) => {
    return (
      <VideoItem key={video.id.videoId} onVideoSelect={ onVideoSelect } video={ video }/>
    );
  });
  return(
    <div data-test-id='video-list-component-main-div' className='ui relaxed divided list'>
      {videoItemList}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

VideoList.defaultProps = {
  videos: []
};

export default VideoList;

// items: PropTypes.arrayOf(
//   PropTypes.shape({
//     code: PropTypes.string,
//     id: PropTypes.number,
//   })
// ),