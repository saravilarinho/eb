import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles/Styles.css';
import img from "../Images/film.jpg";
import eyeicon from '../Images/eye_icon.png'
import hearticon from '../Images/heart_unfill.svg'
import {Link} from 'react-router-dom'


const MiniatureEntertaiment = (props) => {

    let path = props.img;


    if (props.type ==='Movie' || props.type === 'Serie') {
        path = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + props.img;
    }
    return (

        <section className={'d-inline mb-5'}>
            <div className={'col-10 col-md-5 col-lg-3 listentertaiment mb-5'}>
                <section className={'col-11 h-100'}>
                    <img src={path} className={'w-100 d-block img-back'}/>
                    <div className={'position-absolute above p-3'}>
                        <h1 className={'text-wrap'}> {props.title} </h1>
                        <p className={' text-adapt text-wrap'}>{props.text}
                        </p>
                        <div className={'row justify-content-between likeandview w-100 '}>
                            <Link to={'/Individual/'+props.type+'s/' + props.id} className={"col-5 col-lg-4 d-flex align-items-center"}>
                                <img className={'img-fluid '} src={eyeicon}/>
                            </Link>
                            <img className={"col-5 col-lg-4 img-fluid d-flex align-items-center"} src={hearticon}/>
                        </div>
                    </div>
                </section>
                <section className={'col-12 text-center seemore'}>
                    <button className={'buttonseemore'}>SEE MORE</button>
                </section>
            </div>
        </section>

    );
};

export default MiniatureEntertaiment;
