import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);


//faire le underline active sur le header
//changer la couleur du SVG du footer
//ajouter un voile sur l'image du Banner