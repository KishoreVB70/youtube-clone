import React from 'react'
import SuggestionCardContainer from './SuggestionCardContainer'
import VideoCardsContainer from './VideoCardsContainer'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div>
        <SuggestionCardContainer />
        <SideBar />
        <VideoCardsContainer />
    </div>
  )
}

export default Body