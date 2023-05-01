import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Account = () => {
  

  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Account;