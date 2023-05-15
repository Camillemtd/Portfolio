import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Error from './_utlis/Error/Error';
import WIP from './pages/WIP/WIP';
import BaseLayout from './pages/BaseLayout';

const App = () => {
    return(
      <>
        
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout/>}>
              <Route index element={<Home/>}/>

              <Route path='/home' element={<Home/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/wip' element={<WIP/>}/>
              <Route path='/contact' element={<Contact/>}/>

              <Route path='*' element={<Error/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        
        </>
    )
    }
export default App;
