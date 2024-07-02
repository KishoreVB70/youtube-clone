import React from 'react'
import SideBarItem from './SideBarItem'

function SideBarList({items}) {
  return (
    <div className='flex flex-col border border-bottom-black p-2 m-2' >
        {items.map(itm => <SideBarItem />)}
    </div>
  )
}

export default SideBarList