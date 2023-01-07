import logo from '../logo.svg';
import Blog from '../Blog.css';
import React from 'react';

const BlogHeader = () => {

    return (
        <div>
            <div>
                <img src={logo} className="App-logo Image-Size" alt="logo" />
            </div>
        </div>
    );
}


export default BlogHeader;