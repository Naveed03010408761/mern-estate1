import { useState } from 'react';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingnIn from './pages/SingnIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/sign-in' element = {<SingnIn/>}/>
    <Route path='/sign-up' element = {<SignUp/>}/>
    <Route path='/profile' element = {<Profile/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}
export default App;
