import React from 'react'
import SideBarList from './SideBarList'

function SideBar({items}) {
  return (
    <div>
        {items.map(itm => <SideBarList />)}
    </div>
  )
}

export default SideBar