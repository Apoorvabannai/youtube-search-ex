import React from 'react';
import './VideoItem.css';
import PropTypes from 'prop-types';

const VideoItem = ({ video, onVideoSelect }) => {
  return(
    <div data-test-id='video-item-event-handler' onClick={ () => onVideoSelect(video) } className='video-item item'>
      <img data-test-id='video-item-image' alt={ video.snippet.title } className='ui image' src={ video.snippet.thumbnails.medium.url } />
      <div className='content'>
        <div data-test-id='video-item-header' className='header'>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.array,
  onVideoSelect: () => {},
};

VideoItem.defaultProps = {
  video: []
};

export default VideoItem;
