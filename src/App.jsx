import { useState } from 'react'
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
