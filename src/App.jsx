import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Main pages of the website
import Home from './components/pages/homepage/Home.jsx'
import Propuesta from './components/pages/Propuesta.jsx'
import Contact from './components/pages/Contact.jsx'
import ErrorPage from './components/notfoundpage/ErrorPage.jsx'

//Footer + Navbar
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propuesta" element={<Propuesta />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/propuesta' element={<Propuesta />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App