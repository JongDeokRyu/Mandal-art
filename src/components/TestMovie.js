import {React, useState , useEffect} from 'react';
import { axios } from 'axios';
import SideBar from './SideBar';

const TestMovie = () => {

    const [user , setUser] = useState('');
    const [loading , setLoading] = useState(true);

    const getMoives = async () => {
        const movie = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await movie.json();
        console.log('json ===> ' , json);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(json => {
                setUser(json.data);
                setLoading(false);
            });
    }, []);

    return(
        <div className='Mains App-body'>
            <div id='Mains-left'>
                <SideBar></SideBar>
            </div>
            <div>
                <h2>Test Movie</h2>
            </div>
        </div>
    );
}



export default TestMovie;