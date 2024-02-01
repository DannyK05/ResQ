import React from 'react';
import './App.css';
import Home from "../src/pages/home";
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import MedicalPage from './pages/medical';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Bot from './pages/bot';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import Map from './pages/map';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element = {<LoginPage/>} />
      <Route path = "/signup" element = {<SignupPage/>} />
      <Route path = "/medical" element = {<MedicalPage/>} />
      <Route path = "/home" element = {<Home/>} />
      <Route path = "/profile" element = {<Profile/>} />
      <Route path = "/settings" element = {<Settings/>} />
      <Route path = "/bot" element = {<Bot/>} />
      <Route path = "/map" element = {<Map/>} />
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
