import React from 'react';
import '../Styles.css';
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div className={"row"}>
            <nav className={"navbar"}>
                <Link to={"/Homepage"}>  <img src={"IMGS/Logo.png"} className={'img-fluid logo'}/>
                </Link>
                <div className={"links"}>
                        <Link to={"/Movies"} >Movies</Link>
                        <Link to={"/TvShows"}>TV Shows</Link>
                        <Link to={"/Books"}>Books</Link>
                        <Link to={"/Music"}>Music</Link>
                        <Link to={"/LogIn"}>Log In/Sign In</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
