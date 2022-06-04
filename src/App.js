import './App.css';
import React from 'react'
import About from './components/About';
import Design from './components/Design';
import Dev from './components/Dev';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
            <Routes>
                <Route path='portfolio/about' element={<About/>}/>
                <Route path='portfolio/design' element={<Design/>}/>
                <Route path='portfolio/dev' element={<Dev/>}/>
                <Route path='portfolio/' element={<Home/>}/>
            </Routes>






        </div>
      </Router>
  );
}

export default App;
