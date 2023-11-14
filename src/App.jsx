import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Main pages of the website
import Home from './components/pages/homepage/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Products from './components/pages/Products.jsx'
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
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App