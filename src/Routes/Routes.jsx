import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Layout/Home';
import Account from '../Layout/Account';
import Destination from '../Layout/Destination';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: 'account',
    element: <Account></Account>,
    children: [
      {
        path: '/account',
        element: <Login></Login>
      },
      {
        path: '/account/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'destination',
    element: <Destination></Destination>
  }
]);

export default router

// const Routes = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Routes;