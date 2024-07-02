import React from 'react'
import VideoCard from './VideoCard'

const VideoCardsContainer = ({cards}) => {
  return (
    <div>
        {cards.map(itm => <VideoCard />)}
    </div>
  )
}

export default VideoCardsContainer