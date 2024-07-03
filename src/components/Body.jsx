// hooks
import React, { useContext, useEffect, useState } from 'react'

//Components
import DefaultSideBar from './DefaultSideBar'
import SideBar from './SideBar'
import SuggestionsButtonList from './SuggestionsButtonList'
import VideoCardsContainer from './VideoCardsContainer'

import { YOUTUBE_POPULAR_VIDEOS_API, YOUTUBE_CHANNEL_BASE_API } from '../utils/constants';

//Utils
import { SideBarContext } from '../utils/SidebarContext'

//redux
import { setPopularVideo, setFilteredPopularVideo } from '../redux/popularVideoSlice';
import { useDispatch } from 'react-redux'


const Body = () => {
  const {sideBarState} = useContext(SideBarContext);
  console.log("Body re rendered");

  // Redux
  const dispatch = useDispatch();

  const getPopularVideos = async() => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

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
    dispatch(setPopularVideo(neo_items));
    dispatch(setFilteredPopularVideo(neo_items));
  }

  useEffect(() => {
    getPopularVideos();
  }, [])

  return (
    <div className='flex flex-row w-full h-screen' >
        {sideBarState?<SideBar />:<DefaultSideBar />}
      <div className='flex flex-col w-full h-full mx-2' >
          <h1>{sideBarState}</h1>
          <SuggestionsButtonList />
          <VideoCardsContainer />
      </div>
    </div>
  )
}

export default Body