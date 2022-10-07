import React from 'react'
import {
    Link
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from './/video.png';


const Navbar = () => {

    let location = useLocation();

    return (
        <>

            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={`${logo}`} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        My Entertainment
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/movies' className={`nav-link ${location.pathname === "/movies" ? "active" : ""}`}>Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/topmovies' className={`nav-link ${location.pathname === "/topmovies" ? "active" : ""}`}>Top Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/upcomingmovies' className={`nav-link ${location.pathname === "/upcomingmovies" ? "active" : ""}`}>Upcoming Movies</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className={`nav-link ${location.pathname === "/tvshows" || location.pathname === "/Reality" || location.pathname === "/Documentary" || location.pathname === "/Miniseries" || location.pathname === "/Scripted" || location.pathname === "/TalkShow" ? "active" : ""} dropdown-toggle`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TV Shows
                                </Link>
                                <ul className="dropdown-menu" style={{ background: "#161111" }}>
                                    <li><Link className="dropdown-item" style={{ color: "#1266f1" }} to="/tvshows">All</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: "#1266f1" }} to="/Reality">Reality</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: "#1266f1" }} to="/Documentary">Documentary</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: "#1266f1" }} to="/Miniseries">Miniseries</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: "#1266f1" }} to="/Scripted">Scripted</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: "#1266f1" }} to="/TalkShow">TalkShow</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <form className='d-flex input-group w-auto mx-1 my-1'>

                                <Link className="btn btn-outline-primary sbtn" type="button" to="/search">Search Movies</Link>
                            </form>
                            <form className='d-flex input-group w-auto mx-1 my-1'>

                                <Link className="btn btn-outline-primary sbtn" type="button" to="/searchtv">Search Shows</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar