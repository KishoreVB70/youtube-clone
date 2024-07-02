import React from 'react'

const VideoCard = ({item}) => {
  return (
    <div className='flex flex-col' >
        <div>Video screen</div>
        <div className='flex flex-row' >
            <div>Icon</div>
            <div className='flex flex-col' >
                <h1>Video title</h1>
                <h4>Channel name</h4>
                <p>Views</p>
                <p>upload time</p>
            </div>
            <div>Icon</div>
        </div>
    </div>  
  )
}

export default VideoCard