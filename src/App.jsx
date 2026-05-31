import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
