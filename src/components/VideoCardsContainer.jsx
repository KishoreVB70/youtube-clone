import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants';


const VideoCardsContainer = () => {
  const [videoData, setVideoData] = useState(null);
  const cards = [1,2,3,4,5,6,7,8,9,10,11,12];

  useEffect(() => {
    getVideos();
  },[])

  const getVideos = async() => {
    console.log(YOUTUBE_POPULAR_VIDEOS_API);
    const _data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const data = await _data.json();
    console.log(data);
  }

  return (
    <div className='flex flex-row flex-wrap justify-around w-full mt-2 h-full' >
        {cards.map((itm, i) => {
          return (
            <VideoCard  key={i} />
          )
        })}
    </div>
  )
}

export default VideoCardsContainer