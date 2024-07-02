import React, { useContext } from 'react'
import SuggestionsButtonList from './SuggestionsButtonList'
import VideoCardsContainer from './VideoCardsContainer'
import SideBar from './SideBar'
import DefaultSideBar from './DefaultSideBar'
import { SideBarContext } from '../utils/SidebarContext'

const Body = () => {
  const {sideBarState} = useContext(SideBarContext);
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