import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer'
import Movies from './Movies';
import Series from "./Series";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <Navbar/>
            <Switch>
                <Route path="/Homepage" component={Homepage}/>
                <Route path="/Movies" component={Movies}/>
                <Route path="/Series" component={Series}/>
                <Route path="/Books"/>
                <Route path="/Music"/>
                <Route path="/Login"/>
                <Route path="/Registo"/>
                <Route path="/Favourites"/>
                <Route path="/Movies/Individual/:id_entertaiment"/>
                <Route component={Homepage}/>
            </Switch>

    <Footer/>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
