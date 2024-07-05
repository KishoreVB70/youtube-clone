import React, { useState } from 'react'
import CommentList from './CommentList';
const SingleComment = ({comment}) => {
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies(s => !s);
    console.log(comment.replies.length);
    console.log(comment.replies);
  }

  return (
    <>
    <div className='w-full flex flex-col mt-5 border-l p-2 border-black' >
      <div  className='flex flex-row justify-between items-center mb-2'>
        <div className='flex flex-row items-center' >
          <img className='w-10 h-10 mr-3 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user-icon" />
          <div className='flex flex-col' >
            <div className="flex flex-row">
                <p className='mr-4' >{comment.name}</p>
                <p>1 day ago</p>
            </div>
            <p className='my-1'>{comment.comment}</p>
          </div>
        </div>
        <img className='w-3 h-5 mr-2' src="https://www.iconpacks.net/icons/3/free-icon-more-7660.png" alt="3-dots" />
      </div>
      <div className='flex items-center ml-14 flex-row' >
        <img className='w-7 h-7 pb-1' src="https://www.iconpacks.net/icons/3/free-icon-thumbs-up-11229.png" alt="like-icon" />
        <img className='w-7 h-7 mx-5 pt-1 ' src="https://www.iconpacks.net/icons/4/free-icon-thumbs-down-14918.png" alt="dislike-icon" />
        <p>Reply</p>
      </div>
      {comment.replies.length > 0 &&
        <p onClick={handleShowReplies} className='hover:cursor-pointer ml-4'>{showReplies?"Hide replies":"Show replies"} ({comment.replies.length})</p>
      }
    </div>
    {showReplies && comment.replies.length > 0 && <CommentList comments={comment.replies}/>}
    </>


  )
}

export default SingleComment