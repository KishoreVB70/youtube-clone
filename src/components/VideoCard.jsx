import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({data}) => {
  console.log("Video card");
  console.log(data);
  const {snippet, statistics, channelThumb} = data;
  const {publishedAt, channelTitle, title, thumbnails} = snippet
  const {viewCount} = statistics

  let viewString;
  if(viewCount < 1000000) {
    viewString = `${(viewCount/1000).toFixed(0)}K views`
  } else {
    viewString = `${(viewCount/1000000).toFixed(1)}M views`
  }

  function timeSince(dateString) {
    const now = new Date();
    const pastDate = new Date(dateString);
  
    let diffTime = Math.abs(now - pastDate);

    // Remove milliseconds
    diffTime = diffTime/1000

    let timeString;

    if(diffTime > (365 * 30 * 24 * 60 * 60)) {
      timeString = `${(diffTime/(365 * 30 * 24 * 60 *60)).toFixed(0)} years ago`;

    } else if (diffTime > 30 * 24 * 60 * 60) {
      timeString = `${(diffTime/(30 *24 * 60 *60)).toFixed(0)} months ago`;

    } else if (diffTime > 24* 60* 60) {
      timeString = `${(diffTime/(24 * 60 *60)).toFixed(0)} days ago`;

    } else if (diffTime > 60*60) {
      timeString = `${(diffTime/(60*60)).toFixed(0)} hours ago`;

    }  else if (diffTime > 60) {
      timeString = `${(diffTime/(60)).toFixed(0)} minutes ago`;

    } else {
      timeString = `${diffTime.toFixed(0)} seconds ago`
    }
    return timeString;
  }

  const timeString = timeSince(publishedAt);

  return (
    <div className='flex flex-col w-1/4 p-2 h-3/6' > 
        <Link className="h-3/5" to={"/watch?v="+data.id} >
          <img className='hover:cursor-pointer w-full h-full bg-gray-100 rounded-2xl' src={thumbnails?.maxres?.url?thumbnails?.maxres?.url:thumbnails.standard.url } alt="video-card" />
        </Link>     
        <div className='flex flex-row w-full mt-4' >
          <img className="hover:cursor-pointer w-12 h-12 rounded-full" src={channelThumb.medium.url} alt="channel-icon" />
          <div className='flex flex-col ml-2 w-4/5' >
              <h1 className='font-semibold text-lg' >{title}</h1>
              <h4>{channelTitle}</h4>
              <div className='flex flex-row'>
                <p className='' >{viewString}</p>
                <p className='font-bold mx-2 ' >.</p>
                <p>{timeString}</p>
              </div>
          </div>
            <img  className='w-4 h-5 hover:cursor-pointer' src="https://www.iconpacks.net/icons/3/free-icon-more-7660.png" alt="3-dots" />
        </div>
    </div>  
  )
}

export default VideoCard