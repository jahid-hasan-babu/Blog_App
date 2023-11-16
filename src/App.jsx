import React from 'react'
import Navbar from './layout/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
    
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
      </BrowserRouter>
    
  )
}

export default App
