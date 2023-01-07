import {React, useState , useEffect} from 'react';
import  axios  from 'axios';
import SideBar from '../components/SideBar';
import Main from './main.css';


const TestRouteUser = () => {

    const [user , setUser] = useState('');
    const [loading , setLoading] = useState(true);
    

    // const getMoives = async () => {
    //     const movie = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    //     const json = await movie.json();
    //     console.log('json ===> ' , json);
    // }
    useEffect(() => {
        console.log('test render');
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => console.log(response))
    }, [])

    return(
        <div className='Mains App-body'>
            <div id='Mains-left'>
                <SideBar></SideBar>
            </div>
            <div className='right-body-style'>
                <h2> Mdsfsdfme </h2>
            </div>
        </div>
    );
}



export default TestRouteUser;