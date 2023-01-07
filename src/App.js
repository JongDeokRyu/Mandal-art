import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import Body from './pages/Body';
import Home from './pages/Home';
import Movie from './pages/Movie';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Boarder from './pages/Boarder';
import TestRouteUser from './pages/TestRouteUser';
import IronManDetail from './components/IronManDetail';
import MandaratPage from './pages/MandaratPage';



function App() {
  const [isStart, setIsStart] = useState(false);

  const clickButton = (isClick) => {
    setIsStart(isClick);
  }



  return (

    <div>
      <div className='App-Index'>
        <>
          <div className="nav-bar">
            <NavBar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dairy" element={<Body />} />
            <Route path="/Movie" element={<Movie />}/>
            <Route path="/IronManDetail/:id" element={<IronManDetail/>}/>
            <Route path="/MandaratPage" element={<MandaratPage />} />
            <Route path="/TestRouteUser/:id" element={<TestRouteUser />} />
          </Routes>
        </>
      </div>
    </div>
  );
}

export default App;


// const clickTest = () => {
//   console.log('test');
//   getMovies();
// }

// 2732991225
// const getMovies = async () => {
//   const json = await (
//     await fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//     )
//   ).json();
//   console.log('json ===> ', json);
// }

//   useEffect(() => {
//     axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml')
//         .then(json => {
//            console.log(json.data);
//         })
// }, []);


// useEffect(() => {
//   axios.get("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => console.log('response.json ---> ', response.data)
//     )
// }, [])

// useEffect(() => {
//   axios.get('http://data.ex.co.kr/openapi/specialAnal/trafficFlowByTime?key=2732991225&type=json&iStdYear=2018')
//     .then((response) => console.log('무비 json ---> ', response.data.trafficFlowByTimeLists)
//     )
// }, [])

// useEffect(() => {
//   axios.get('http://data.ex.co.kr/openapi/specialAnal/intercityLeadTime?key=2732991225&type=json&iYear=2018&iStUnitCode=1&iEdUnitCode=2&numOfRows=10&pageNo=1')
//     .then((response) => console.log('무비 json ---> ', response)
//     )
// }, [])