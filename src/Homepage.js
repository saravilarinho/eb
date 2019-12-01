import React from 'react';
import './Styles/Styles.css';
import Backdrop from './Components/Backdrop'
import RandomEntertaiment from './Components/RandomEntertaiment'

function Homepage() {

    return (
        <div>
            <Backdrop/>
            <RandomEntertaiment/>
        </div>
    );
}

export default Homepage;
