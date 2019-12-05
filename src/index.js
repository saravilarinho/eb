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
import List from  './List'
import Books from './Books'
import RootReducer from './Reducers/RootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Select_Individual_Movie from "./Components/Select_Individual_Movie";
import thunk from 'redux-thunk';


const store = createStore(RootReducer, applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Navbar/>
            <Switch>
                <Route path="/Homepage" component={Homepage}/>
                <Route path="/Movies/:id_entertaiment" component={IndividualEntertaimentPage}/>
                <Route path="/Movies" component={Movies}/>
                <Route path="/Series/:id_entertaiment" component={IndividualEntertaimentPage}/>
                <Route path="/List/:type/:content/:page" component={List}/>
                <Route path="/Series" component={Series}/>
                <Route path="/Books/:isbn" component={IndividualEntertaimentPage}/>
                <Route path="/Books" component={Books}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Registo" component={SignIn}/>
                <Route path="/Select_Individual_Movies" component={Select_Individual_Movie}/>
                <Route path="/Favourites"/>
                <Route component={Homepage}/>
            </Switch>

    <Footer/>
    </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
