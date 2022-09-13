import React from 'react';
import "./App.css";

import Home from './Home';
import Data from './Data';
import Maths from './Maths';
import Graph from './Graphs';
import Maps from './Maps';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer'; 
import { Routes, Route } from 'react-router-dom';

function App(){
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="/graphs" element={<Maths/>} />
          <Route path="/graphs" element={<Graph/>} />
          <Route path="/maps" element={<Maps/>} />
          <Route path="/contact" element={<Contact/>} />          
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
