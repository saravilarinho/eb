import React from 'react';
import './Styles.css';
import Backdrop from './Componentes/Backdrop'
import RandomEntertaiment from './Componentes/RandomEntertaiment'

function Homepage() {
  return (
    <div className={"background"}>
        <Backdrop/>
        <RandomEntertaiment/>
    </div>
  );
}

export default Homepage;
