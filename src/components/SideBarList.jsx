import React from 'react'

const items = [1,2,3,4,5];

function SideBarList() {
  return (
    <div className='flex flex-col border-b border-black p-2 m-2' >
      <h1 className='font-bold' >Explore</h1>
        {items.map(itm => 
          <div className='flex flex-row hover:cursor-pointer hover:bg-gray-100 w-full' > 
            <img className='h-8 my-2' src="https://www.iconpacks.net/icons/3/free-fire-flame-icon-5621.png" alt="trending-icon" />
            <p>Trending</p>
          </div>
        )}
    </div>
  )
}

export default SideBarList