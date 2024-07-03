import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useSelector} from 'react-redux';


const VideoCardsContainer = () => { 
  const popularVideos = useSelector((store => store.popularVideoSlice.popularVideos))
  const filteredPopularVideos = useSelector((store => store.popularVideoSlice.filteredPopularVideos))
  console.log("video card rerendered");
  console.log(filteredPopularVideos);

  return (
    <div className='flex flex-row flex-wrap justify-around w-full mt-2 h-full' >
        {filteredPopularVideos.length > 0 && filteredPopularVideos.map(itm => {
          return (
            <VideoCard  key={itm.id} data={itm} />
          )
        })}
    </div>
  )
}

export default VideoCardsContainer