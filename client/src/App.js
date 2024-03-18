import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

import './App.css';

const App = () => {
  return (
    <AuthState>
    <ContactState>
    <BrowserRouter>
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='about' element={<About/>} />
          <Route exact path='register' element={<Register/>} />
          <Route exact path='login' element={<Login/>} />
        </Routes>
      </div>
    </Fragment>
    </BrowserRouter>
    </ContactState>
    </AuthState>
  );
}

export default App;
