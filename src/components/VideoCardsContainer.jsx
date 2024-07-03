import React from 'react'
import VideoCard from './VideoCard'
import usePopularVideos from '../utils/usePopularVideos';

const VideoCardsContainer = () => {
  const videoData = usePopularVideos();

  return (
    <div className='flex flex-row flex-wrap justify-around w-full mt-2 h-full' >
        {videoData.map((itm) => {
          return (
            <VideoCard  key={itm.id} data={itm} />
          )
        })}
    </div>
  )
}

export default VideoCardsContainer