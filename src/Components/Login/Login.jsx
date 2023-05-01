import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/images/icons/google.png'
import fb from '../../assets/images/icons/fb.png'

const Login = () => {
  return (
    <div className='mt-11 max-w-screen-xl mx-auto'>
      <form className='md:w-1/2 mx-auto form-container ' action="">
        <p className='text-2xl font-semibold mb-7'>Login</p>
        <div className="relative z-0 w-full mb-6 group">
          <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-[#F9A51A] peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#F9A51A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username or Email</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-[#F9A51A] peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#F9A51A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div className="flex justify-between mt-6">
          <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-[#F9A51A] bg-gray-100 border-gray-300 rounded focus:ring-[#F9A51A] dark:focus:ring-[#F9A51A] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
          </div>
          <Link className='underline text-[#F9A51A]'>Forgot Password</Link>
        </div>
        <button className='btn w-full mt-12 mb-4'>Login</button>
        <p className='text-center'>Don't have an account? <Link to='/account/register' className='underline text-[#F9A51A]'>Create an account</Link></p>
      </form>
      {/* social login */}
      <div className="flex items-center justify-center my-6">
        <hr className='border w-28' />
        <p className='mb-1 mx-2'>or</p>
        <hr className='border w-28' />
      </div>
      <div className="mx-auto  text-center mb-4">
        <div className="cursor-pointer flex mx-auto items-center border border-[#C7C7C7] w-[50%] md:w-[30%] rounded-full p-1 mb-2">
          <img className='w-8 h-8' src={google} alt="" />
          <p className='text-center mx-auto'>Login with Google</p>
        </div>
        <div className="cursor-pointer flex mx-auto items-center border border-[#C7C7C7] w-[50%] md:w-[30%] rounded-full p-1">
          <img className='w-8 h-8' src={fb} alt="" />
          <p className='text-center mx-auto'>Login with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;