import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useSelector} from 'react-redux';


const VideoCardsContainer = () => { 
  const popularVideos = useSelector((store => store.popularVideoSlice.popularVideos))
  const filteredVideos = useSelector((store => store.popularVideoSlice.FilteredPopularVideo))

  // IN the first time, set it
  // filteredVideos.length===0 && dispatchFunction(setFilteredPopularVideo(videoData));

  return (
    <div className='flex flex-row flex-wrap justify-around w-full mt-2 h-full' >
        {popularVideos.map((itm) => {
          return (
            <VideoCard  key={itm.id} data={itm} />
          )
        })}
    </div>
  )
}

export default VideoCardsContainer