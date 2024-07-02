import './App.css';
// import {Outlet} from "react-router-dom"
import Header from './components/Header';
import Body from "./components/Body";
import { SideBarContext } from './utils/SidebarContext';
import { useState } from 'react';

function App() {
  const [sideBarState, setSidebarState] = useState(false);
  return (
    <div className='h-full w-full' >
      <SideBarContext.Provider value={{sideBarState: sideBarState, setSidebarState}}>
        <Header />
        <Body />
      </SideBarContext.Provider>
    </div>
  );
}

export default App;
