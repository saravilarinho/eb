import React from 'react';
import './Styles/Styles.css';
import Backdrop from './Components/Backdrop'
import RandomEntertaiment from './Components/RandomEntertaiment'

function Homepage() {


    const api = "https://www.googleapis.com/books/v1/volumes?q=isbn:9780399178573";
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {

        if (request.status === 200) {
            console.log(request.response);
        } else {

            console.log('erro na coneção a base de dados');
        }
    };
    request.send();





    return (
        <div>
            <Backdrop/>
            <RandomEntertaiment/>
        </div>
    );
}

export default Homepage;
