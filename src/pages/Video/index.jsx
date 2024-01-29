import React from 'react'
import Video from '../../components/Video'
import VideoData from '../../assets/VideoData'


const VideoPage = () => {
  return (
    <div>
      {VideoData.map((video, index) => (
        <Video key={index} video={video}  />
      ))}

    </div>
  )
}

export default VideoPage