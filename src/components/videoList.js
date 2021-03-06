import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoListItem = props.videos.map((video) => {
    return <VideoListItem
    onVideoSelect= {props.onVideoSelect}
    key={video.etag} video={video} />;
  });

  return (
    <div>
      <ul className="col-md-4 list-group">
        {videoListItem}
      </ul>
    </div>
  )
}

export default VideoList;
