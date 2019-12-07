import React, {useEffect} from 'react';
import './Styles/Styles.css';
// import SearchBar from './Components/SearchBar';
import Logo from './Images/Logo.png';
import Menu from './Images/bars-solid.svg';

import {Link} from 'react-router-dom';
import arrowemblem from "./Images/arrow_emblem.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {auth} from './Config/fbConfig';

import {connect} from 'react-redux';
import {ClearCurrentUser} from "./Actions/ClearCurrentUser";


function Navbar2(props) {

    return (


        <Navbar expand="lg" className={'navstyle fff'}>
            <Navbar.Brand href="/Homepage">
                <img className={'ml-3 mt-3'} src={Logo} width={70}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={'ml-5 mr-5 mt-3'}>
                <img src={Menu} width={40}/>

            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" w-100 mt-4 fff">

                    <span className="nav-item dropdown p-3">
                        <Link to={"/Movies"} className={"links col-md-1"}>Movies</Link>
                        <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                               <a className="dropdown-item" href="/List/Movie/Upcoming/1">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Upcoming</a>
                                <a className="dropdown-item" href="/List/Movie/TopRated/1">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Top Rated</a>
                                 <a className="dropdown-item" href="/List/Movie/Popular/1">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Popular</a>
                            </span>
                    </span>
                    <span className="nav-item dropdown p-3">
                        <Link to={"/Series"} className={"links col-md-1"}>Series</Link>
                        <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/List/Serie/TVOnTheAir/1">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    TV On The Air</a>
                                <a className="dropdown-item" href="/List/Serie/TopRated/1">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Top Rated</a>
                                 <a className="dropdown-item" href="/List/Serie/Popular/1">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Popular</a>
                            </span>
                    </span>
                    <span className="nav-item dropdown p-3">
                        <Link to={"/Books"} className={"links col-md-1"}>Books</Link>
                        <span className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/Books#YoungAdult">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Young Adult</a>
                                <a className="dropdown-item" href="/Books#Fiction">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Fiction</a>
                                 <a className="dropdown-item" href="/Books#NonFiction">
                                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                    Nonfiction</a>
                                 <a className="dropdown-item" href="/Books#GraphicNovels&Manga">
                                        <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                                        Graphic Novels & Manga</a>
                            </span>
                    </span>
                    <span className="nav-item dropdown p-3">
                        <Link to={"/Music"} className={"links col-md-1"}>Music</Link>
                    </span>

                    {props.users.login === false &&

                    <span className="nav-item dropdown p-3">
                        <Link to={"/SignIn"} className={"links col-md-1"}>Sign In</Link>
                        </span>
                    }

                    {props.users.login === true &&

                    <span className="nav-item dropdown p-3">
                        <p className={"links col-md-1"}>{props.users.email}</p>

                        <span className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <a className="dropdown-item" >

                                <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                        Favourites</a>


                            <a className="dropdown-item" >

                                <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                        Settings</a>

                            <a className="dropdown-item" onClick={() =>{props.clearCurrentUser(); auth.signOut()} } >

                                <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>
                        Sign Out</a>

                        </span>
                    </span>

                    }


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )


}

const mapStateToProps = (state) => {
    return {users: state.users}
};


const mapDispatchStateToProps = dispatch => ({

    clearCurrentUser: () => dispatch(ClearCurrentUser())
});



export default connect(mapStateToProps,mapDispatchStateToProps )(Navbar2);
