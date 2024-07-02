import React from 'react'
import SideBarList from './SideBarList'

const items = [1,2,3];

function SideBar() {
  return (
    <div className='border border-black h-full w-2/12' >
        {items.map(itm => <SideBarList />)}
    </div>
  )
}

export default SideBar