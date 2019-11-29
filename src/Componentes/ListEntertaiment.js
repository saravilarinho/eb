import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles.css';
import img from "../IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg";
import eyeicon from '../IMGS/eye_icon.png'
import hearticon from '../IMGS/heart-regular.svg'

const ListEntertaiment=(props)=>{

    const path ='https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+ props.img;
    return (

        <section className={'d-inline'}>
            <div className={'col-10 col-md-5 col-lg-3 listentertaiment'}>
                <section className={'col-11 h-100'}>
                    <img src={path} className={'w-100 d-block img-back'}/>
                    <div className={'position-absolute above p-3'}>
                        <h1 className={'text-wrap'}> {props.title} </h1>
                        <p className={' text-adapt text-wrap'}>{props.text}
                        </p>
                        <div className={'row justify-content-around pt-4'}>
                        <img className={'col-4 img-fluid pt-2 pb-2'} src={eyeicon}/>
                        <img className={'col-3 img-fluid'} src={hearticon}/>
                        </div>
                    </div>
                </section>
                <section className={'col-12 text-center seemore'}>
                    <button className={'buttonseemore'}>SEE MORE</button>
                </section>
            </div>
        </section>

    );
}

export default ListEntertaiment;
