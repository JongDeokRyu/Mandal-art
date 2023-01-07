import { react, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ironManData from '../data/data.json';
import styles from '../css/movieStyles.css';

import { Link } from 'react-router-dom';

const IronManPost = () => {

    return (
        <div className="noneScrollBar" style={{ padding : '1px' , marginLeft : '2.5%' , overflowY: 'scroll', maxWidth : '160vh', maxHeight: '68vh', marginTop: '50px' }}>
                <div className="movies" style={{}}>
                    
                    {ironManData.items.map((ironManDataItem) => {
                        return (
                            <div className="" key={ironManDataItem.id}>
                                <div>
                                    <img className="movie__img" src={ironManDataItem.image}></img>
                                    <div style={{ marginTop: '5%' }}>
                                        <h5 style={{ cursor: 'pointer' , color : 'white'}}>
                                            <Link style={{color : 'white'}} to={`/IronManDetail/${ironManDataItem.id}`}>{ironManDataItem.title}</Link>          
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default IronManPost;