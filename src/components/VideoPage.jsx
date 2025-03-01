import React, {useState, useEffect } from 'react'
import SuggestedVideos from './SuggestedVideos'
import { useSearchParams } from 'react-router-dom'
import { SINGLE_VIDEO_BASE_API } from '../utils/constants'
import VideoDescription from './VideoDescription'
import CommentList from './CommentList'
import LiveChatContainer from './LiveChatContainer'

const VideoPage = () => {
    const [searchParam] = useSearchParams();
    const [videoData, setVideoData] = useState(null)

    const videoId = searchParam.get("v");
    const videoSrc = `https://www.youtube.com/embed/${videoId}`
    const apikey = process.env.REACT_APP_YOUTUBE_API_KEY

    const comments =  [
        {
            name: "Kishore",
            comment: "Hi Tanya",
            replies: [
                {
                    name: "Akshay",
                    comment: "Hello Universe",
                    replies: [
                    ]
                },
                {
                    name: "Groot",
                    comment: "I'm Groot",
                    replies: [
                    ]
                },
                {
                    name: "Kishore",
                    comment: "Hi Tanya",
                    replies: [
                        {
                            name: "Akshay",
                            comment: "Hello Universe",
                            replies: [
                            ]
                        },
                        {
                            name: "Groot",
                            comment: "I'm Groot",
                            replies: [
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name: "Akshay",
            comment: "Hello Universe",
            replies: [
                {
                    name: "Groot",
                    comment: "I'm Groot",
                    replies: [
                        {
                            name: "Akshay",
                            comment: "Hello Universe",
                            replies: [
                                {
                                    name: "Groot",
                                    comment: "I'm Groot",
                                    replies: [
                                    ]
                                },  
                            ]
                        },
                    ]
                },  
            ]
        },
        {
            name: "Groot",
            comment: "I'm Groot",
            replies: [
            ]
        },
    ]

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
    <div className='flex flex-row h-full w-full' >
        <div className='flex flex-col w-[72%] mt-16 h-full' >
            <div className='h-5/6 w-full pl-1'>
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
            <div  className='flex m-2 h-16 px-3 flex-row w-full' >
                <div className='flex flex-col w-full' >
                    {videoData && <VideoDescription data={videoData} />}
                    <div className='w-full flex flex-col mt-5'>
                        <h1 className='text-xl font-bold' >Comments</h1>
                        <CommentList comments={comments} />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col h-full w-[28%] mt-16' >
            <LiveChatContainer />
            {/* <SuggestedVideos /> */}
        </div>
    </div>
  )
}

export default VideoPage