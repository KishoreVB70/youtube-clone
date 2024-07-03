import React from 'react'
import { Link } from 'react-router-dom'


function DefaultSideBar() {
const items = [1,2,3,4,5,6]

  return (
    <div className=' flex flex-col w-20 mt-2  items-center h-full' >
        {items.map((itm, ind)=> {
          return (
            <Link key={ind} to="/" className='w-full ml-1' >
              <div  className='flex w-full my-0 py-5 hover:rounded-2xl flex-col items-center hover:cursor-pointer hover:bg-gray-100'> 
                    <img className='w-1/3 h-6' src="https://www.iconpacks.net/icons/1/free-icon-home-175.png" alt="homelogo" />
                    <p className='text-xs my-1' >Home</p>
              </div>
            </Link>
          )
        }
      )}
    </div>
  )
}

export default DefaultSideBar