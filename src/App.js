import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"


import Axios from "axios"
import Addstudent from './Components/Addstudent';
import Readdata from './Components/Readdata';
import Readone from './Components/Readone';
import Del from './Components/Del';
import Update from './Components/Update';



function App() {

  return (
    <div>
       <BrowserRouter>
           <Link to="/add">Add Student</Link>
 
           <Routes>
               <Route path="/add" element={ <Addstudent/> }></Route>
               <Route path="/students" element={ <Readdata/> }></Route>

               <Route path="/" element={ <Readdata/> }></Route>
                 <Route path=":id" element={<Readone/>}></Route>
                 <Route path="delete/:id" element={<Del/>}></Route> 
                 <Route path="edit/:id" element={<Update/>}></Route> 

               
                 
           </Routes>
       </BrowserRouter>
    </div>
   );
}

export default App;
