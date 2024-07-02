import React from 'react'
import SuggestionsButtonList from './SuggestionsButtonList'
import VideoCardsContainer from './VideoCardsContainer'
import SideBar from './SideBar'
import DefaultSideBar from './DefaultSideBar'

const Body = () => {
  return (
    <div className='flex flex-row w-full h-screen border border-black' >
      <DefaultSideBar />
      <div className='flex flex-col w-full h-full border border-black ' >
          <SuggestionsButtonList />
          {/* <VideoCardsContainer /> */}
      </div>
    </div>
  )
}

export default Body