import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import App from '../App';
import logo from '../logo.svg'
import { Button } from 'react-bootstrap';
import Main from './main.css';
import Test from '../components/Test.js'


const Boarder = () => {
  const [imgBase, setImgBase] = useState([]);

  // const handleChangeFile = (e) => {
  //   console.log('event.target.files ---> ', e.target.files);
  //   console.log('Url.createObjectUrl ---> ' , URL.createObjectURL(e.target.files[0]));
  //   let reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     // console.log('reader result ---> ', reader.result.toString());
  //   }
  //   console.log('reader.result ---> ' , reader.result);

  //   // setImgBase(reader.readAsDataURL(reader.result.toString()));
  //   setImgBase(URL.createObjectURL(e.target.files[0]));
  //   // setImgBase(reader.result.toString());
  // }

  useEffect(() => {
    setImgBase((localStorage.getItem('ImgTestStorage')))
  },[])

  useEffect( () => {
    localStorage.setItem('ImgTestStorage' , JSON.stringify(imgBase));
  },[imgBase]);

  return (
    <div className='Mains App-body'>
      <div id='Mains-left'>
        <SideBar></SideBar>
      </div>
      <div className='right-body-style'>
        <Test></Test>
      </div>
    </div>
  );

};

export default Boarder;