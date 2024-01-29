import React from 'react'
import videoImport from '../../assets/videoImport.png'

 

const Video = ({video}) => {
  
  video = {
    img: videoImport,
    url: "https://www.youtube.com/watch?v=kHJSNFU7H4U",
    title: 'Sample video',
    description: 'This is a sample video description'
  }

  return (
    <div>
        {/* <Thumbnail video={video} /> */}
        <img width={"400px"} src={videoImport}></img>
        <a href={video.url}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
        </a>
        {/* <LikeButton video={video} /> */}
    </div>
  )
}

export default Video