import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Events from './pages/Events';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/events' element={<Events/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router