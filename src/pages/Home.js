import React, { useEffect, useState } from 'react';
import Main from './main.css';
import axios from 'axios';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

import Button from 'react-bootstrap'

const Home = () => {

    const [koreaMovieDatas, setKoreaMovieDatas] = useState('');
    const [globalMovieDatas, setGlobalMovieDatas] = useState('');


    useEffect(() => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=39575e07a3eb11bb1d7820502d69e33f&targetDt=20220405&repNationCd=K')
            .then((response) => {
                setKoreaMovieDatas(response.data.boxOfficeResult.dailyBoxOfficeList);
            })
    }, [])

    useEffect(() => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=39575e07a3eb11bb1d7820502d69e33f&targetDt=20220405&repNationCd=F')
            .then((response) => {
                setGlobalMovieDatas(response.data.boxOfficeResult.dailyBoxOfficeList);
            })
    }, [])

    //39575e07a3eb11bb1d7820502d69e33f



    useEffect(() => {
        console.log('koreaMovieDatas ---> ', koreaMovieDatas);
    }, [koreaMovieDatas]);

    useEffect(() => {
        console.log('globalMovieDatas ---> ', globalMovieDatas);
    }, [globalMovieDatas]);

    useEffect(() =>{
        console.log('data ---> ' , data.items);
    },[])

    const test = () =>{
        console.log('test')
    }


    return (
        <div className='Mains App-body'>
            <div id='Mains-left'>
                <SideBar></SideBar>
            </div>
            <div className='right-body-style'>
                {/* {data.items.length > 0 &&
                    data.items.slice(0,1).map((da)=> {
                        return(
                            <>
                                <li className='UserDataList'>{da.tilte}</li>
                                <img src={da.image} onClick={test}></img>
                            </>
                        )
                    })} */}
            </div>
        </div>
    );
}

export default Home;

