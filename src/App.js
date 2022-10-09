import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Router,
} from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';
// import Moviesmore from './components/Moviesmore';
import Tvshow from './components/Tvshow';
import Topmovies from './components/Topmovies';
import Upcomingmovie from './components/Upcomingmovie';
import Search from './components/Search';
import SearchTV from './components/SearchTV';
import Reality from './components/Reality';
import Documentary from './components/Documentary';
import Miniseries from './components/Miniseries';
import Scripted from './components/Scripted';
import TalkShow from './components/TalkShow';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/topmovies" element={<Topmovies />} />
            <Route path="/upcomingmovies" element={<Upcomingmovie />} />
            {/* <Route path="/moviesmore" element={<Moviesmore />} /> */}
            <Route path="/tvshows" element={<Tvshow />} />
            <Route path="/search" element={<Search />} />
            <Route path="/searchtv" element={<SearchTV />} />
            <Route path="/Reality" element={<Reality />} />
            <Route path="/Documentary" element={<Documentary />} />
            <Route path="/Miniseries" element={<Miniseries />} />
            <Route path="/Scripted" element={<Scripted />} />
            <Route path="/TalkShow" element={<TalkShow />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
