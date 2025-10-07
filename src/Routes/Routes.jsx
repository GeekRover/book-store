import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>OKay bhul poth</div>,
    children:[
      {
        index:true,
        path: "/",
        element: <h1>HEllo ami Home</h1>
      },
      {
        path: 'about',
        element: <h1>This is about</h1>
      }
    ]
  },
]);

