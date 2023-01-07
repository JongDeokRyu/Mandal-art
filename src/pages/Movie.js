import React, { useEffect, useState } from 'react';
import Main from './main.css';
import SideBar from '../components/SideBar';
import IronManPost from '../components/IronManPost';
import { Link } from 'react-router-dom';

import { Button, Tab, Tabs, Carousel } from 'react-bootstrap'
import KoreaMovieRank from '../components/KoreaMovieRank';
import GlobalMovieTable from '../components/GlobalMovieTable';

const Movie = () => {


    //39575e07a3eb11bb1d7820502d69e33f

    return (
        <div className='Mains App-body'>
            <div id='Mains-left'>
                <SideBar></SideBar>
            </div>
            <div className='right-body-style'>
                <div>
                <Tabs style={{ paddingTop : '1px' , margin: '1% 0 0 2%'   }} defaultActiveKey="iron-man" className="TabFixPosition">
                    <Tab eventKey="iron-man" title="영화 포스터">
                        <div style={{ height : '30px'}}></div>
                        <IronManPost></IronManPost>
                    </Tab>
                    <Tab eventKey="한국영화 일별 순위" title="한국영화 일별 순위">
                        <div style ={{height : '80px'}}></div>
                        <KoreaMovieRank></KoreaMovieRank>
                    </Tab>
                    <Tab eventKey="외국영화 일별 순위" title="외국영화 일별 순위" >
                    <div style ={{height : '80px'}}></div>
                    <GlobalMovieTable></GlobalMovieTable>
                    </Tab>
                </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Movie;

