import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './componets/Header/Header';
import Contact from './pages/Contact/Contact';
import Error from './_utlis/Error/Error';
import Footer from './componets/Footer/Footer'

const App = () => {
    return(
      <>
        <Header/>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home/>}/>

              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>

              <Route path='*' element={<Error/>}/>
              
          </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
    }
export default App;
