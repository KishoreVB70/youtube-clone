import React from 'react'
import SuggestionCardContainer from './SuggestionCardContainer'
import VideoCardsContainer from './VideoCardsContainer'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='flex flex-row' >
        <SideBar />
        <div className='flex flex-col' >
            <SuggestionCardContainer />
            <VideoCardsContainer />
        </div>
    </div>
  )
}

export default Body