import React from 'react'

const items = [1,2,3,4,5];

function SideBarList() {
  return (
    <div className='flex flex-col border-b w-11/12 border-gray-300 p-2 pl-3 m-2' >
      <h1 className='font-bold mb-2 ' >Explore</h1>
      {items.map((itm, i) => 
        <div key={i} className='flex flex-row hover:cursor-pointer hover:bg-gray-100 w-full pl-2 items-center hover:rounded-xl' > 
          <img className='h-8 my-2 mr-5 ' src="https://www.iconpacks.net/icons/3/free-fire-flame-icon-5621.png" alt="trending-icon" />
          <p>Trending</p>
        </div>
      )}
    </div>
  )
}

export default SideBarList