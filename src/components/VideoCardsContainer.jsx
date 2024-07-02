import React from 'react'
import VideoCard from './VideoCard'

const VideoCardsContainer = ({cards}) => {
  return (
    <div className='flex flex-row justify-around' >
        {cards.map(itm => <VideoCard />)}
    </div>
  )
}

export default VideoCardsContainer