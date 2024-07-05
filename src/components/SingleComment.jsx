import React from 'react'

const SingleComment = ({comment}) => {
  return (
    <div className='w-full flex flex-col mt-5 border p-2 border-black' >

      <div  className='flex flex-row'>
        <img src="" alt="user-icon" />
        <div className='flex flex-col' >
          <div className="flex flex-row">
              <p>{comment.name}</p>
              <p>time</p>
          </div>
          <p>{comment.comment}</p>
        </div>
        <img src="" alt="3-dots" />
      </div>
      <div className='flex flex-row' >
          <p>Like</p>
          <p>Dis like</p>
          <p>Reply</p>
      </div>
    </div>
  )
}

export default SingleComment