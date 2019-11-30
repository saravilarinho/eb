import React from 'react';
import '../Styles/Styles.css';
import eyeicon from '../Images/eye_icon.png'
import hearticon from '../Images/heart_unfill.svg'
import film from '../Images/film.jpg'
import director from '../Images/director.png'





function IndividualEntertaiment() {


    return (
        <div className={"row IndividualEntertaiment justify-content-around m-5 "}>


            <section className={'row justify-content-around ' }>

                <div className={'col-10 col-md-5 col-lg-3  img-enter d-flex align-items-center'}>
                    <img className={'col-12 entertaiment'}
                         src={film}/>
                    <img className={'col-4 icon'} src={eyeicon}/>
                    <img className={'col-3  icon'} src={hearticon}/>

                </div>

                <div className={'col-12 col-md-6 col-lg-8  img-enter d-flex align-items-center p-5'}>

                    <div>
                    <h1>Titulo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum turpis est. Aliquam
                        mollis urna nec dui bibendum tempus. Praesent vel condimentum dolor. Pellentesque quis finibus
                        tortor, non scelerisque magna. Maecenas auctor eleifend auctor. Cras auctor nunc nec semper
                        pulvinar. Etiam tempor enim nec lacus scelerisque volutpat. Duis eu magna quis ligula elementum
                        pellentesque. Vivamus pretium elit non laoreet viverra. Nunc feugiat felis sit amet lorem
                        fringilla,
                        et posuere nulla tincidunt.</p>
                    </div>
                </div>

            </section>


         <section className={'row justify-content-around'}>
            <section className={'col-10 col-lg-3 DirectorContain'}>
                <img className={'col-5 h-100 Director'} src={director}/>

                <section className={'col-4 pl-5 pr-5 pt-4 d-inline-block text-center'}>
                    <h2>DIRECTOR</h2>
                    <p>James Gunn</p>
                </section>
            </section>

            <section className={'col-10 col-lg-3 DirectorContain'}>
                <img className={'col-5 h-100 Director'} src={director}/>

                <section className={'col-4 pl-5 pr-5 pt-4 d-inline-block text-center'}>
                    <h2>DIRECTOR</h2>
                    <p>James Gunn</p>
                </section>
            </section>

            <section className={'col-10 col-lg-3 DirectorContain'}>
                <img className={'col-5 h-100 Director'} src={director}/>

                <section className={'col-4 pl-5 pr-5 pt-4 d-inline-block text-center'}>
                    <h2>DIRECTOR</h2>
                    <p>James Gunn</p>
                </section>
            </section>

         </section>

        </div>

    );
}

export default IndividualEntertaiment;
