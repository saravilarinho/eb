import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RootReducer from './Reducers/RootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";


const store = createStore(RootReducer, applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
