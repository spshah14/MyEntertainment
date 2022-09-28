import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Router,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Movies from './components/Movies';
import Popular from './components/Popular';
// import Moviesmore from './components/Moviesmore';
import Tvshow from './components/Tvshow';
import Topmovies from './components/Topmovies';
import Upcomingmovie from './Upcomingmovie';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/topmovies" element={<Topmovies />} />
            <Route path="/upcomingmovies" element={<Upcomingmovie />} />
            {/* <Route path="/moviesmore" element={<Moviesmore />} /> */}
            <Route path="/tvshows" element={<Tvshow />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
