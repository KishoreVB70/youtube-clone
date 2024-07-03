// hooks
import React, { useContext } from 'react'
import usePopularVideos from '../utils/usePopularVideos';

//Components
import DefaultSideBar from './DefaultSideBar'
import SideBar from './SideBar'
import SuggestionsButtonList from './SuggestionsButtonList'
import VideoCardsContainer from './VideoCardsContainer'

//Utils
import { SideBarContext } from '../utils/SidebarContext'

//redux
import { setPopularVideo, setFilteredPopularVideo } from '../redux/popularVideoSlice';
import { useDispatch } from 'react-redux'


const Body = () => {
  const {sideBarState} = useContext(SideBarContext);

  const videoData = usePopularVideos();

  const dispatch = useDispatch();
  dispatch(setPopularVideo(videoData));

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