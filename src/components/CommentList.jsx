import React from 'react'
import SingleComment from './SingleComment'

const CommentList = ({comments}) => {
  return (
    <div className='ml-5' >
        {comments.map((i, ind) => 
            (
                <>
                    <SingleComment comment={i} key={ind} />
                    {i.replies.length > 0 && <CommentList comments={i.replies}/>}
                </>
            )
        )}
    </div>
  )
}

export default CommentList