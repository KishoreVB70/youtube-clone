import React from 'react'

const VideoDescription = ({data}) => {
    const {snippet, statistics, channelThumb} = data;
    const {publishedAt, channelTitle, title, thumbnails} = snippet
    const {viewCount, likeCount} = statistics
    let likeString;
    if(likeCount > 1000000) {
      likeString = `${(likeCount/1000000).toFixed(0)}M`

    } else if (likeCount > 1000) {
        likeString = `${(likeCount/1000).toFixed(0)}K`
    } else {
        likeString = `${(likeCount).toFixed(0)}`
    }
    return (
        <div className='flex flex-col w-4/6' >
            <h1  className='w-full font-bold text-xl' >{title}</h1>
            <div className='flex flex-row mt-2 justify-between'>
                <div  className='flex flex-row items-center justify-center '>
                    <img src={thumbnails.default.url} className='rounded-full w-11 h-11' alt="channel-thumbnail" />
                    <div className='flex flex-col mx-4' >
                        <h1 className='font-semibold text-lg' >{channelTitle}</h1>
                        <p className='text-sm' >60.8M Subscribers</p>
                    </div>
                    <button className=' ml-3 bg-black font-semibold text-white text-center justify-center items-center w-24 rounded-3xl p-3 pt-2 h-10'>Subscribe</button>
                </div>
                <div className='flex flex-row' >
                    
                    <button className='h-10 w-24 bg-gray-100 p-2 rounded-l-full' >
                        <div className='flex flex-row justify-center items-center' >
                            <img className='h-5 mr-2 w-6' src="https://www.iconpacks.net/icons/3/free-icon-thumbs-up-11229.png" alt="like-icon" />
                            <p className='font-semibold' >{likeString}</p>
                        </div>
                    </button>
                    <button className='h-10 w-12 bg-gray-100 p-2 rounded-r-full border-l border-gray-300' >
                        <img className='h-5 w-6' src="https://www.iconpacks.net/icons/3/free-icon-thumbs-up-11229.png" alt="dislike-icon" />
                    </button>
                    <button className='h-10 w-20 mx-4 bg-gray-100 p-2 rounded-3xl'>Share</button>
                    <button  className='h-10 w-24 bg-gray-100 p-2 rounded-3xl'>Download</button>
                    <button  className='h-10 w-20 mx-4 bg-gray-100 p-2 rounded-3xl'>clip</button>
                    <div  className='h-10 w-12 mx-4 bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>
                        <img  className='h-4 w-5' src="https://www.iconpacks.net/icons/3/free-icon-more-7657.png" alt="3 dots" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoDescription