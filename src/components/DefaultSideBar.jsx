import React from 'react'

function DefaultSideBar({items}) {
  return (
    <div className=' flex flex-col w-1/12, h-full' >
        {items.map(itm => 
            <div  className='flex flex-col'> 
                <div>Logo</div>
                <h1>Name</h1>
            </div>
        )}

    </div>
  )
}

export default DefaultSideBar