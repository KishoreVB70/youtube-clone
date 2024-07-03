import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({item}) => {
  return (
    <div className='flex flex-col w-1/4 p-2 h-2/5' > 
        <Link className="h-full" to={"/video"} >
          <img className='hover:cursor-pointer w-full h-full bg-gray-100 rounded-2xl' src="https://i.redd.it/0eekhqw63anz.png" alt="video-card" />
        </Link>     
        <div className='flex flex-row w-full mt-4' >
          <img className="hover:cursor-pointer w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9fkj_i7VDqocOrfLYaI7ZzQIZOKYr5aSPA&s" alt="channel-icon" />
          <div className='flex flex-col ml-2 w-4/5' >
              <h1 className='font-semibold text-lg' >Pewdepie confesses</h1>
              <h4>Pewdepie</h4>
              <div className='flex flex-row'>
                <p className='' >1.2M</p>
                <p className='font-bold mx-2 ' >.</p>
                <p>2 years ago</p>
              </div>
          </div>
            <img  className='w-4 h-5 hover:cursor-pointer' src="https://www.iconpacks.net/icons/3/free-icon-more-7660.png" alt="3-dots" />
        </div>
    </div>  
  )
}

export default VideoCard