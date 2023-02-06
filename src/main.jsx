import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
