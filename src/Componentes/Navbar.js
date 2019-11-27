import React from 'react';
import '../Styles.css';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div className={"row"}>
            <nav className={"navbar"}>
                <Link to={"/Homepage"} className={'logo_link'}>  <img src={"IMGS/Logo.png"} className={'img-fluid logo col-md-2'}/></Link>
                <div>
                    <span className="nav-item dropdown">
                            <Link to={"/Movies"} className={"links nav-link dropdown-toggle col-md-2"}  >Movies</Link>
                            <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                            </span>
                    </span>
                        <Link to={"/TvShows"} className={"links col-md-2"}>TV Shows</Link>
                        <Link to={"/Books"} className={"links col-md-2"}>Books</Link>
                        <Link to={"/Music"} className={"links col-md-2"}>Music</Link>
                        <Link to={"/LogIn"} className={"links col-md-2"}>Log In/Sign In</Link>
                </div>
                <SearchBar className={'col-md-2'}/>

            </nav>
        </div>
    );
}

export default Navbar;
