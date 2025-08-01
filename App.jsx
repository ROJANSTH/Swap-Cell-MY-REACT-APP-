// src/App.jsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Homepage from './components/Home/HomePage';
import Login from './components/LoginPage/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">SwapCell</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© 2023 SwapCell. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>We are Nepal's trusted marketplace for buying and selling used laptops.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Email: info@swapcell.com</p>
      <p>Phone: +977 9841XXXXXX</p>
    </div>
  );
}

export default App;
