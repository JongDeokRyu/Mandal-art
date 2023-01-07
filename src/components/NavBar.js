import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
    Link,
    NavLink
} from 'react-router-dom';

const NavBar = () => {
    return (

        <nav className="NavBar-Size navbar navbar-expand-lg navbar-dark bg-dark" >
            <img src={logo} className="App-logo Header-Image-Size" alt="logo" /> <br></br>
            <Link className="navbar-brand" to="/">Home</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to='/MandaratPage' >만다라트</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to='/Dairy' >Dairy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/movie'>Movie</Link>
                    </li>
                </ul>
            </div>
        </nav>



    )

}

export default NavBar;