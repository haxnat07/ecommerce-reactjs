import React from "react";
import{Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Policies } from "./pages/Policies";
import Pagenotfound from "./pages/Pagenotfound.";
//this is comment to check git this is also a comment
function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policies' element={<Policies/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
  
    </Routes>

    </>
  );
}

export default App;
