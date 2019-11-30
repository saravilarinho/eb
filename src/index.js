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
import Select_Movies from './Select_Movies'

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
                <Route path="/Select_Movies" component={Select_Movies}/>
                <Route component={Homepage}/>

            </Switch>

    <Footer/>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
