import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "../src/pages/home";
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import MedicalPage from './pages/medical';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Bot from './pages/bot';
import Notification from "./components/notification"
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate} from "react-router-dom";
import Map from './pages/map';



function App() {
  const[authenticated, setAuthenticated] = useState(true)// change to false to use the authentication

  const handleLogin = () =>{
    let token = localStorage.getItem('token')
    token ? setAuthenticated(true) : setAuthenticated(false)
  }
  // This checks for token when component mounts
  useEffect(() =>{
    handleLogin()
  },[])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* Uncomment this when the login page is ready */}
      
      {/* <Route index element = {<LoginPage setAuthenticated={setAuthenticated}/>} /> */}
      {/* <Route path = "/signup" element = {<SignupPage/> } /> */}
      {/* <Route path = "/medical" element = {<MedicalPage/> } /> */}
      <Route index element = {<Home/>} />
      {/* <Route path = "/home" element = {authenticated ? <Home/> : <Navigate to="/"/>} /> */} 
      <Route path = "/profile" element = { authenticated ? <Profile/> : <Navigate to="/"/>} />
      <Route path = "/settings" element = {authenticated ? <Settings/> : <Navigate to="/"/>} />
      <Route path = "/bot" element = { authenticated ? <Bot/> : <Navigate to="/"/>} />
      <Route path = "/map" element = { authenticated ? <Map/> : <Navigate to="/"/>} />
      <Route path = "/notification" element = { authenticated ? <Notification/> : <Navigate to="/"/>} />
      </>
    )
  );
  return (
    <>
    <RouterProvider router={router}/>
    
    </>

  )
}

export default App;
