import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Noticia from './pages/noticia'
import Radio from './pages/radio'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Noticia" element={<Noticia />} index />
        <Route path="/Radio" element={<Radio />} index />

      </Routes>
    </BrowserRouter>
  )
}

export default App