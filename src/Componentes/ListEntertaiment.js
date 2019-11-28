import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles.css';
import img from "../IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg";

function ListEntertaiment() {
    return (

        <div className={'col-10 col-md-5 col-lg-3 listentertaiment p-2'}>
            <img className={''} src={img}/>
        </div>
    );
}

export default ListEntertaiment;
