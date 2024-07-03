import React from 'react'

const Comments = () => {
  return (
    <div className='w-full h-24 flex flex-row' >
        <img src="" alt="" />
        <div className='flex flex-col' >
            <div className="flex flex-row">
                <p>User name</p>
                <p>time</p>
            </div>
            <p>Comment</p>
            <div className='flex flex-row' >
                <p>Like</p>
                <p>Dis like</p>
                <p>Reply</p>
            </div>
        </div>

    </div>
  )
}

export default Comments