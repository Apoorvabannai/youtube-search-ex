import React from 'react';
import './VideoItem.css';
import PropTypes from 'prop-types';

const VideoItem = ({ video, onVideoSelect }) => {
  return(
    <div onClick={ () => onVideoSelect(video)} className='video-item item'>
      <img alt={video.snippet.title} className='ui image' src={ video.snippet.thumbnails.medium.url } />
      <div className='content'>
        <div className='header'>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.array
};

VideoItem.defaultProps = {
  video: []
};

export default VideoItem;
