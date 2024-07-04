import React from 'react'
import SideBarList from './SideBarList'

const items = [1,2,3];

function SideBar() {
  return (
    <div className='h-full w-64 fixed mt-16' >
        {items.map(itm => <SideBarList />)}
    </div>
  )
}

export default SideBar