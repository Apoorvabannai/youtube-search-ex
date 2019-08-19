import React from 'react';
import PropTypes from 'prop-types';

// TODO: Write tests for video detail video-details-component video-details-video-player video-details-segment video-details-header video-details-p-text
const VideoDetail = ({ video }) => {
  if(!video) {
    return <div> Loading... </div>;
  };
  const videoSrc = `https://www.youtube.com/embed/${ video.id.videoId }`;
  return(
    <div data-test-id='video-details-component'>
      <div data-test-id='video-details-video-player' className='ui embed'>
        <iframe title="video player" src={ videoSrc } />
      </div>
      <div data-test-id='video-details-segment' className='ui segment'>
        <h4 data-test-id='video-details-header' className='ui header'> { video.snippet.title } </h4>
        <p data-test-id='video-details-p-text'> {video.snippet.description} </p>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetail;
