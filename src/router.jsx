import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router