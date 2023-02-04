import {
    createBrowserRouter,
  } from "react-router-dom";
  import Checkout from './checkout';

const router = createBrowserRouter([
    {
      path: "/checkout",
      element: Checkout()
    },
  ]);
  

export default router;