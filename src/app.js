
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const SwiggyMart = lazy(()=> import("./components/SwiggyMart"))

const AppComponent = () => (
  
  <div className="app">
    <Header />
   <Outlet/>
    
  </div>
 
);
const approute= createBrowserRouter([
  {
path:"/",
element:<AppComponent />,
children:[
  {
    path:"body",
    element:<Body />,
  },
  {
    path:"swiggymart",
   
    element:  <Suspense fallback={<div>hai</div>}><SwiggyMart /></Suspense>,
  }
]
  }
 ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approute}/>);