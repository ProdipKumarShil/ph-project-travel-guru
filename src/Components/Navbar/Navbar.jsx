import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/' class="flex items-center">
            <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
          </Link>

          <div className='mr-auto w-80'>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your Destination..." required />
            </div>
          </div>

          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Destination</Link>
              </li>
              <li>
                <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Blog</Link>
              </li>
              <li>
                <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Contract</Link>
              </li>
              <li>
                <Link to='/account' class="btn px-7 " aria-current="page">Login</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;