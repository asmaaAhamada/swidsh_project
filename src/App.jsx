import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './components/LinkPages/Home/homePage'
import AboutPage from './components/LinkPages/AboutPage'
import ProjectsPage from './components/LinkPages/projectsPage'
import LoginPage from './components/auth/loginPage'
import SighnPage from './components/auth/sighnPage'
import WelcomPage from './components/LinkPages/Home/welcomPage'


export default function App({toggleMode, mode}){
  return (
    <>
     
       <Routes>
        {/* <Route path="/*" element={<NotFound />} /> */}

  {/* <Route path="/" element={<Login />} /> */}
    {/* <Route path="/login" element={<Login />} />
    <Route path="/google/callback" element={<Login_Google />} /> */}

    {/* <Route path="/sighn" element={<SignUp />} /> */}
{/* //////////////token//////////////// */}
      {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<Layout toggleMode={toggleMode} mode={mode}/>}>
<Route index element={<WelcomPage />} />
    <Route path="/hemsida" element={<WelcomPage />} />

    <Route path="/Om" element={<AboutPage />} />
    <Route path="/Logga_in" element={<LoginPage />} />
    <Route path="/Skapa_konto" element={<SighnPage />} />


</Route>
        {/* </Route> */}
     
</Routes> 
    </>
  )
}