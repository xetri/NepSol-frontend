import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreatorLogin from './Components/Authpage/CreatorLogin'
import Dash from './Components/Dashboard/Dash'
import Profile from './Components/Profile/Profile'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          { /* Add specific routes */ }
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<CreatorLogin/>}/>
          { /* 
            <Route path="/dashboard" element={Dashboard}/>
            // ^^^ Creates dynamic route with parameter of creator
            <Route path="/profile/:creator" element={Profile}/>
            */}
          { /* 404 Page */ }
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/Profile" element={<Profile/>}/>

          <Route element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
