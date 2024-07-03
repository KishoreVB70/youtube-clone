import './App.css';
// import {Outlet} from "react-router-dom"
import Header from './components/Header';
import Body from "./components/Body";
import { SideBarContext } from './utils/SidebarContext';
import { useState } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoPage from './components/VideoPage';


function App() {
  const [sideBarState, setSidebarState] = useState(false);
  return (
    <div className='h-full w-full' >
      <SideBarContext.Provider value={{sideBarState: sideBarState, setSidebarState}}>
        <Header />
        <Outlet />
      </SideBarContext.Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/video",
        element: <VideoPage />
      }
    ]
  }
])

export default App;
