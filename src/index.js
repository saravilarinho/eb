import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer'
import Movies from './Movies';
import Series from "./Series";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Page_individual from './Page_individual'
import Music from "./Music";
import Login from './Login'
import Registo from './Registo'

ReactDOM.render(
    <Router>
        <Navbar/>
            <Switch>
                <Route path="/Homepage" component={Homepage}/>
                <Route path="/Movies/:id_entertaiment" component={Page_individual}/>
                <Route path="/Movies" component={Movies}/>
                <Route path="/Series" component={Series}/>
                <Route path="/Books"/>
                <Route path="/Music" component={Music}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Registo" component={Registo}/>
                <Route path="/Favourites"/>
                <Route component={Homepage}/>
            </Switch>

    <Footer/>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
