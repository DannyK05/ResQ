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
  const[authenticated, setAuthenticated] = useState(false)

  const handleLogin = () =>{
    let token = localStorage.getItem('token')
    token ? setAuthenticated(true) : setAuthenticated(true)
  }
  // This checks for token when component mounts
  useEffect(() =>{
    handleLogin()
  },[])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element = {<LoginPage setAuthenticated={setAuthenticated}/>} />
      <Route path = "/signup" element = {<SignupPage/> } />
      <Route path = "/medical" element = {<MedicalPage/> } />
      <Route path = "/home" element = {authenticated ? <Home/> : <Navigate to="/"/>} />
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
