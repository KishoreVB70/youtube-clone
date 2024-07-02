import './App.css';
// import {Outlet} from "react-router-dom"
import Header from './components/Header';
import DefaultSideBar from './components/DefaultSideBar';
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <DefaultSideBar />
      <Body />
    </div>
  );
}

export default App;
