import logo from './logo.svg';
import './App.css';
import React , {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import Body from './pages/Body';
import Home from './pages/Home';
import routes from './routes';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Boarder from './pages/Boarder';



function App() {
  const [isStart , setIsStart] = useState(false);

  const clickButton = (isClick) => {
    setIsStart(isClick);
    console.log('App isStart --> ' , isStart);
  }
  

  return (
    <div>
      {isStart ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/boarder" element={<Boarder/>} />
          </Routes>
        </>

        : <LoginPage clickButton={clickButton} />}
    </div>   
  );
}

export default App;





