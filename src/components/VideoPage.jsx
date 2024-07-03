import React from 'react'
import Comments from './Comments'
import SuggestedVideos from './SuggestedVideos'

const VideoPage = () => {
  return (
    <div>
        <div className='flex flex-col h-5/6 w-full' ></div>
        <div  className='flex flex-row' >
            <div className='flex flex-col'>
                <div className="video-description">
                </div>
                <div className="comments-container">
                    <Comments />
                </div>
            </div>
            <div className='Suggested-video-container' >
                <SuggestedVideos />
            </div>
        </div>
    </div>
  )
}

export default VideoPage