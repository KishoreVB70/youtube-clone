import React from 'react'
import VideoCard from './VideoCard'
const cards = [1,2,3,4,5,6,7,8,9,10,11,12];
const VideoCardsContainer = () => {
  return (
    <div className='flex flex-row flex-wrap justify-around w-full mt-2 h-full' >
        {cards.map(itm => <VideoCard />)}
    </div>
  )
}

export default VideoCardsContainer