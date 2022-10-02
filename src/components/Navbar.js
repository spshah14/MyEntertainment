import React, { useState } from 'react'
// import {
//     Link
// } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
    let location = useLocation();

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">SMART TV</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">Movies</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}




            <MDBNavbar expand='lg' dark bgColor='dark' sticky="true" transparent="true">
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>SMART TV</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink aria-current='page' href='/' className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/about' className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/movies' className={`nav-link ${location.pathname === "/movies" ? "active" : ""}`}>Movies</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/popular' className={`nav-link ${location.pathname === "/popular" ? "active" : ""}`}>Popular Movies</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/topmovies' className={`nav-link ${location.pathname === "/topmovies" ? "active" : ""}`}>Top Movies</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/upcomingmovies' className={`nav-link ${location.pathname === "/upcomingmovies" ? "active" : ""}`}>Upcoming Movies</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/tvshows' className={`nav-link ${location.pathname === "/tvshows" ? "active" : ""}`}>TV Shows</MDBNavbarLink>
                            </MDBNavbarItem>

                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' id="searchTxt" placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


        </>
    )
}

export default Navbar