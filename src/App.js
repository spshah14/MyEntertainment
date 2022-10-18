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

function App() {
  const apikey = process.env.REACT_APP_TMDB_API
  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home apikey={apikey} />} />
            <Route path="/home" element={<Home apikey={apikey} />} />
            <Route path="/movies" element={<Movies apikey={apikey} />} />
            <Route path="/topmovies" element={<Topmovies apikey={apikey} />} />
            <Route path="/upcomingmovies" element={<Upcomingmovie apikey={apikey} />} />
            {/* <Route path="/moviesmore" element={<Moviesmore />} /> */}
            <Route path="/tvshows" element={<Tvshow apikey={apikey} />} />
            <Route path="/search" element={<Search apikey={apikey} />} />
            <Route path="/searchtv" element={<SearchTV apikey={apikey} />} />
            <Route path="/Reality" element={<Reality apikey={apikey} />} />
            <Route path="/Documentary" element={<Documentary apikey={apikey} />} />
            <Route path="/Miniseries" element={<Miniseries apikey={apikey} />} />
            <Route path="/Scripted" element={<Scripted apikey={apikey} />} />
            <Route path="/TalkShow" element={<TalkShow apikey={apikey} />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
