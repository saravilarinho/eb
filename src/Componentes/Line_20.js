import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import '../Styles.css';
import ListEntertaiment from '../Componentes/ListEntertaiment'
import img from "../IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg";


class Line20 extends Component {
    render() {
        return (
            <Carousel>
                <div className={'row justify-content-around ml-5'}>
                    <img src={img} className={'col-2 img-fluid nothing'}/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                </div>
                <div>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                </div>
                <div>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                    <ListEntertaiment/>
                </div>
            </Carousel>
        );
    }
}

export default Line20;
