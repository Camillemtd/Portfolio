import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Header from './componets/Header/Header';
import Contact from './pages/Contact/Contact';
import Error from './_utlis/Error/Error';
import Footer from './componets/Footer/Footer'
import WIP from './pages/WIP/WIP';

const App = () => {
    return(
      <>
        
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route index element={<Home/>}/>

              <Route path='/home' element={<Home/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/wip' element={<WIP/>}/>
              <Route path='/contact' element={<Contact/>}/>

              <Route path='*' element={<Error/>}/>
              
          </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
    }
export default App;
