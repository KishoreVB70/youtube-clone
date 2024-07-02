import React from 'react'
import SuggestionsButtonList from './SuggestionsButtonList'
import VideoCardsContainer from './VideoCardsContainer'
import SideBar from './SideBar'
import DefaultSideBar from './DefaultSideBar'

const Body = () => {
  return (
    <div className='flex flex-row w-full h-screen' >
      <DefaultSideBar />
      <div className='flex flex-col w-full h-full mx-2' >
          <SuggestionsButtonList />
          <VideoCardsContainer />
      </div>
    </div>
  )
}

export default Body