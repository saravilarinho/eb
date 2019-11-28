import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles.css';
import img from "../IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg";
import eyeicon from '../IMGS/eye_icon.png'
import hearticon from '../IMGS/heart-regular.svg'

function ListEntertaiment() {
    return (

        <section className={'d-inline'}>
            <div className={'col-10 col-md-5 col-lg-3 listentertaiment'}>
                <section className={'col-11'}>
                    <img src={img} className={'w-100 d-block img-back'}/>
                    <div className={'position-absolute above p-3'}>
                        <h1> TITULO </h1>
                        <p className={' text-adapt text-wrap'}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse interdum
                            turpis est. Aliquam
                            mollis urna nec dui bibendum tempus. Praesent vel condimentum dolor. Pellentesque quis
                            finibus
                            tortor, non scelerisque magna.
                            mollis urna nec dui bibendum tempus. Praesent vel condimentum dolor. Pellentesque quis
                            finibus
                            tortor, non scelerisque magna.

                        </p>
                        <div className={'row justify-content-around pt-5'}>
                        <img className={'col-4 img-fluid pt-2'} src={eyeicon}/>
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
