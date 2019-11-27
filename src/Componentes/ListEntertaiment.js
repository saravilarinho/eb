import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import '../Styles.css';
import img from "../IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg";


function ListEntertaiment() {
    return (

            <img className={'col-2 img-fluid p-1'} src={img}/>
    );
}

export default ListEntertaiment;
