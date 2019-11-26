import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(<Router>

    <div>
        <Switch>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/movies"/>
            <Route path="/series"/>
            <Route path="/books"/>
            <Route path="/music"/>
            <Route path="/login"/>
            <Route path="/registo"/>
            <Route path="/favourites"/>


            <Route component={Homepage}/>
        </Switch>

    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
