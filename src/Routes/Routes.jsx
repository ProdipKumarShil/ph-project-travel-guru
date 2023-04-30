import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Layout/Home';
import Account from '../Layout/Account';
import Destination from '../Layout/Destination';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: 'account',
    element: <Account></Account>
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