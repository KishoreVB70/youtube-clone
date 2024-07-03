import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_POPULAR_VIDEOS_API, YOUTUBE_CHANNEL_BASE_API } from '../utils/constants';


const VideoCardsContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    getVideos();
  },[])

  const getVideos = async() => {
    // Obtaining video data
    const _data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const data = await _data.json();

    // Obtaining all the channel ids
    const channel_ids = (data.items).map(i => i.snippet.channelId);
    let channelIdString = ""
    channel_ids.forEach(i => channelIdString = channelIdString+"&id="+i);
    channelIdString.toString();

    // Obtaining channel information
    let YOUTUBE_CHANNEL_API = YOUTUBE_CHANNEL_BASE_API + channelIdString + "&key=" +apiKey
    const _channelData = await fetch(YOUTUBE_CHANNEL_API);
    const channelData = await _channelData.json();

    // Adding channel thumbnail into the video data
    let data_items = data.items;
    let channel_items = channelData.items;

    let neo_items = data_items.map(i => {
      const match = channel_items.filter(j => i.snippet.channelId === j.id)
      i["channelThumb"] = match[0].snippet.thumbnails;
      return i;
    })
    console.log(neo_items);
    setVideoData(neo_items);
  }

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