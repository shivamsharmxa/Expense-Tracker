import React from "react";
import Login from "./components/authentication/Login";
import Sign from "./components/authentication/Sign";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import './App.css';

function App() {
  return (
    <div className="app">
    <Router> {/* Use Router instead of Routes here */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Sign />} />
        {/* Chat index page */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;


