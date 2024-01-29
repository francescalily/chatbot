import React from 'react'

const Video = ({video}) => {
  
  return (
    <div>
        {/* <Thumbnail video={video} /> */}
        { <img width={"400px"} src={video.img}></img> }
        <a href={video.url}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
        </a>
        {/* <LikeButton video={video} /> */}
    </div>
  )
}

export default Video