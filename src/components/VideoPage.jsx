import React, {useState, useEffect } from 'react'
import Comments from './Comments'
import SuggestedVideos from './SuggestedVideos'
import { useSearchParams } from 'react-router-dom'
import { SINGLE_VIDEO_BASE_API } from '../utils/constants'
import VideoDescription from './VideoDescription'

const VideoPage = () => {
    const [searchParam] = useSearchParams();
    const [videoData, setVideoData] = useState(null)

    const videoId = searchParam.get("v");
    const videoSrc = `https://www.youtube.com/embed/${videoId}`
    const apikey = process.env.REACT_APP_YOUTUBE_API_KEY


    const getVideoData = async() => {
        const singleVideoApi = SINGLE_VIDEO_BASE_API + "&id=" + videoId + "&key=" + apikey
        const _data = await fetch(singleVideoApi);
        const data = await _data.json();
        console.log(data.items[0]);
        setVideoData(data.items[0]);
    }


    useEffect(() => {
        getVideoData();
    }, [])

  return (
    <div className='flex flex-col w-full h-full' >
        <div className='h-5/6 w-full'>
            <iframe 
                className='h-full w-full'
                src={videoSrc}
                title="Eminem - Tobey (feat. Big Sean amp; Babytron) [Official Audio]"
                frameBorder="0"     
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
        <div  className='flex m-2 px-3 flex-row h-1/6 w-full' >
            {videoData && <VideoDescription data={videoData} />}
            {/* <SuggestedVideos /> */}
        </div>
    </div>
  )
}

export default VideoPage