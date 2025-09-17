import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreatorLogin from './Components/Authpage/CreatorLogin'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          { /* Add specific routes */ }
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<CreatorLogin/>}></Route>
          { /* 
            <Route path="/dashboard" element={Dashboard}/>
            // ^^^ Creates dynamic route with parameter of creator
            <Route path="/profile/:creator" element={Profile}/>
            */}
          { /* 404 Page */ }
          <Route element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
