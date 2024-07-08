import './App.css';

//Components
import Header from './components/Header';
import Body from "./components/Body";
import VideoPage from './components/VideoPage';
import DemoMemo from './components/DemoMemo';
import DemoRef from './components/DemoRef';
import DemoCallback from './components/DemoCallback';

import { Outlet, createBrowserRouter } from 'react-router-dom';

// Hooks
import { useState } from 'react';

//utils
import { SideBarContext } from './utils/SidebarContext';

// Redux
import { Provider} from 'react-redux';
import appStore from './redux/appStore';

function App() {
  const [sideBarState, setSidebarState] = useState(false);
  return (
    <div className='h-full w-full' >
      <Provider store={appStore}>
        <SideBarContext.Provider value={{sideBarState: sideBarState, setSidebarState}}>
          <Header />
          <Outlet />
        </SideBarContext.Provider>
      </Provider>
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
        path: "/watch",
        element: <VideoPage />
      },
      {
        path: "/demo",
        element:  
        <>
         <DemoMemo />
         <DemoCallback />
         <DemoRef />
        </>
      }
    ]
  }
])

export default App;
