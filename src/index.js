import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer'
import Movies from './Movies';
import TvShows from "./TvShows";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Page_individual from './Page_individual'

ReactDOM.render(
    <Router>
        <Navbar/>
            <Switch>
                <Route path="/Homepage" component={Homepage}/>
                <Route path="/Movies/:id_entertaiment" component={Page_individual}/>
                <Route path="/Movies" component={Movies}/>
                <Route path="/TvShows" component={TvShows}/>
                <Route path="/Books"/>
                <Route path="/Music"/>
                <Route path="/Login"/>
                <Route path="/Registo"/>
                <Route path="/Favourites"/>
                <Route component={Homepage}/>
            </Switch>

    <Footer/>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
