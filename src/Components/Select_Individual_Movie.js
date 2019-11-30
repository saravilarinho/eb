import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import '../Styles.css';
import ListEntertaiment from '../Componentes/ListEntertaiment'
import img from "../IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg";


class Select_Individual_Movie extends Component {
    render() {
        return (
            <div>
                <img src={'rei_leao.jpg'}/>
            </div>
        );
    }
}

export default Select_Individual_Movie;
