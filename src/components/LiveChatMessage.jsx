import React from 'react'

const LiveChatMessage = ({message}) => {
  return (
    <div className=' hover:bg-gray-100 hover:cursor-pointer flex flex-row items-center w-full my-1' >
        <img className='h-8 w-8 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user-image" />
        <div className='flex flex-col'>
            <p className='font-semibold break-words overflow-wrap break-word' >{message.name}</p>
            <p>{message.message}</p>
        </div>
    </div>
  )
}

export default LiveChatMessage