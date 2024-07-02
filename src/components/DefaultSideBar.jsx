import React from 'react'

const items = [1,2,3,4,5,6]

function DefaultSideBar() {
  return (
    <div className=' flex flex-col w-20 mt-2  items-center h-full' >
        {items.map(itm => 
            <div  className='flex w-full my-4 flex-col items-center'> 
                <img className='w-1/3 h-6' src="https://www.iconpacks.net/icons/1/free-icon-home-175.png" alt="homelogo" />
                <p className='text-xs my-1' >Home</p>
            </div>
        )}

    </div>
  )
}

export default DefaultSideBar