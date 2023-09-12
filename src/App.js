import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Videos from './components/Videos.jsx';
import Upload from './components/Upload.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
