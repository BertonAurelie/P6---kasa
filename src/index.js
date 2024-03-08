import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/Error'
import Lodging from './pages/Lodging'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/a_propos" element={<About/>} />
        <Route path="/logements/:id" element={<Lodging/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
