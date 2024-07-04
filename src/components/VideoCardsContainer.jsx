import React from 'react'
import VideoCard from './VideoCard'
import { useSelector} from 'react-redux';


const VideoCardsContainer = () => { 
  const filteredPopularVideos = useSelector((store => store.popularVideoSlice.filteredPopularVideos))

  return (
    <div className='flex flex-row flex-wrap justify-around w-full mt-14 h-full' >
        {filteredPopularVideos.length > 0 && filteredPopularVideos.map(itm => {
          return (
            <VideoCard  key={itm.id} data={itm} />
          )
        })}
    </div>
  )
}

export default VideoCardsContainer