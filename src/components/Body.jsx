import React from 'react'
import SuggestionsButtonList from './SuggestionsButtonList'
import VideoCardsContainer from './VideoCardsContainer'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='flex flex-row' >
        <SideBar />
        <div className='flex flex-col' >
            <SuggestionsButtonList />
            <VideoCardsContainer />
        </div>
    </div>
  )
}

export default Body