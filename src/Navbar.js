import React from 'react';
import './Styles/Styles.css';
import SearchBar from './Components/SearchBar';
import Logo from './Images/Logo.png';
import {Link} from 'react-router-dom';
import arrowemblem from "./Images/arrow_emblem.svg";


function Navbar() {
    return (
        <div className={"row"}>
            <nav className={"navbar"}>
                <Link to={"/Homepage"} className={'logo_link'}>
                    <img src={Logo} className={'img-fluid logo '}/>
                </Link>
                <div className={"posicaolinks"}>
                    <span className="nav-item dropdown">
                            <Link to={"/Movies"} className={"links nav-link col-md-1"}  >Movies</Link>
                            <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Upcoming</a>
                                <a className="dropdown-item" href="#">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Top Rated</a>
                                 <a className="dropdown-item" href="#">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Popular</a>
                            </span>
                    </span>

                    <span className="nav-item dropdown">
                        <Link to={"/Series"} className={"links col-md-1"}>Series</Link>
                        <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Upcoming</a>
                                <a className="dropdown-item" href="#">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Top Rated</a>
                                 <a className="dropdown-item" href="#">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Popular</a>
                            </span>
                    </span>
                        <Link to={"/Books"} className={"links col-md-1"}>Books</Link>
                        <Link to={"/Music"} className={"links col-md-1"}>Music</Link>
                        <Link to={"/LogIn"} className={"links col-md-1"}>Login</Link>
                </div>

                <SearchBar className={'col-md-2'}/>

            </nav>
        </div>
    );
}

export default Navbar;
