import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Works />
      <Contact />
    </Layout>
  );
}


export default App;
