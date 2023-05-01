import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bg from '../assets/images/Rectangle1.png'
import HomeNav from '../Components/HomeNav/HomeNav';

const Home = () => {
  return (
    <div>
      <img className='relative h-[100vh] w-full object-cover filter brightness-[.30]' src={bg} alt="" />
      <div className="absolute inset-0">
        <HomeNav></HomeNav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;