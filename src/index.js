import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Footer from './Footer'
import Movies from './Movies';
import Series from "./Series";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import IndividualEntertaimentPage from './IndividualEntertaimentPage'
import Music from "./Music";
import Login from './Login'
import SignIn from './SignIn'

ReactDOM.render(
    <Router>
        <Navbar/>
            <Switch>
                <Route path="/Homepage" component={Homepage}/>
                <Route path="/Movies/:id_entertaiment" component={IndividualEntertaimentPage}/>
                <Route path="/Movies" component={Movies}/>
                <Route path="/Series" component={Series}/>
                <Route path="/Books"/>
                <Route path="/Music" component={Music}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Registo" component={SignIn}/>
                <Route path="/Favourites"/>
                <Route component={Homepage}/>
            </Switch>

    <Footer/>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
