import { createBrowserRouter, Link } from "react-router";
import Root from "../pages/Root";
import Header from "../pages/Home";
import Step from "../pages/About";
import Pricing from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div className="w-full h-dvh flex justify-center items-center flex-col gap-7"><Link to='/'><button className="btn btn-warning">Go Home</button></Link><h1>Error 404 Page Not Found</h1></div>,
    children:[
      {
        index:true,
        path: "/",
        Component: Header
      },
      {
        path: 'step',
        element: <Step></Step>
      },
      {
        path: 'price',
        Component: Pricing
      }
    ]
  },
]);

