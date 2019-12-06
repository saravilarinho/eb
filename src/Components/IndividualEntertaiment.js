import React from 'react';
import '../Styles/Styles.css';
import hearticon from '../Images/heart_unfill.svg'
import arrowemblem from "../Images/arrow_emblem.svg"


const IndividualEntertaiment = (props) => {

    let exam = Array.isArray(props.info.production_companies);
    let exam2 = Array.isArray(props.info.genres);
    let exam3 = Array.isArray(props.info.items);


    console.log(props.info);


    return (<div className={"row IndividualEntertaiment justify-content-around m-5 "}>
        {props.type === 'Movies' &&
        <section className={'row justify-content-around mt-5'}>

            <div className={'col-10 col-md-5 col-lg-3  img-enter d-flex align-items-center'}>
                <img className={'col-12 entertaiment'}
                     src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + props.info.poster_path}/>
                <img className={'col-3  icon'} src={hearticon}/>

            </div>

            <div className={'col-12 col-md-6 col-lg-8  img-enter d-flex align-items-center p-5'}>

                <div className={'row justify-content-around'}>

                    <h1 className={'col-12 text-center'}>{props.info.title}</h1>


                    {exam2 === true &&

                    <div className={'gen col-12'}>
                        {props.info.genres.map((item) => <div className={'gen d-inline mr-4'}><img alt={'arrowemblem'}
                                                                                                   width={15}
                                                                                                   src={arrowemblem}/>
                            <p className={'ml-1 d-inline'}>{item.name}</p></div>)}</div>
                    }
                    <h2 className={'col-12 mt-5 mb-5'}> {props.info.tagline}</h2>
                    <p className={'col-12'}>{props.info.overview}</p>
                    <h3 className={'col-4 mt-5'}>Release-Date : {props.info.release_date}</h3>
                    <h3 className={'col-4 mt-5'}>Status
                        : {props.info.status}</h3>

                </div>
            </div>
            {exam === true &&


            <section className={'row justify-content-between w-100'}>

                {props.info.production_companies.map((item) =>

                    <section className={'col-10 col-lg-2 DirectorContain d-flex align-items-center'}>

                        <img className={'yourImage m-4'} width={60}
                             src={'https://image.tmdb.org/t/p/h30/' + item.logo_path}/>
                        <h5>{item.name}</h5>
                    </section>
                )}

            </section>
            }


        </section>


        }

        {props.type === 'Series' &&

        <section className={'row justify-content-around mt-5'}>

            <div className={'col-10 col-md-5 col-lg-3  img-enter d-flex align-items-center'}>
                <img className={'col-12 entertaiment'}
                     src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + props.info.poster_path}/>
                <img className={'col-3  icon'} src={hearticon}/>

            </div>

            <div className={'col-12 col-md-6 col-lg-8  img-enter d-flex align-items-center p-5'}>

                <div className={'row justify-content-around'}>

                    <h1 className={'col-12 text-center'}>{props.info.name}</h1>
                    {exam2 === true &&

                    <div className={'gen col-12'}>
                        {props.info.genres.map((item) => <div className={'gen d-inline mr-4'}><img alt={'arrowemblem'}
                                                                                                   width={15}
                                                                                                   src={arrowemblem}/>
                            <p className={'ml-1 d-inline'}>{item.name}</p></div>)}</div>
                    }
                    <p className={'col-12'}>{props.info.overview}</p>
                    <h3 className={'col-4 mt-5'}>Seasons : {props.info.number_of_seasons}</h3>
                    <h3 className={'col-4 mt-5'}>Episodes : {props.info.number_of_episodes}</h3>
                    <h3 className={'col-4 mt-5'}>Type : {props.info.type}</h3>


                </div>
            </div>
            {exam3 === true &&


            <section className={'row justify-content-between w-100'}>

                {props.info.production_companies.map((item) =>

                    <section className={'col-10 col-lg-2 DirectorContain d-flex align-items-center'}>

                        <img className={'yourImage m-4'} width={60}
                             src={'https://image.tmdb.org/t/p/h30/' + item.logo_path}/>
                        <h5>{item.name}</h5>
                    </section>
                )}

            </section>
            }

        </section>
        }

        {props.type === 'Books' && exam3 === true &&


        <section className={'row justify-content-around mt-5'}>
            {console.log(props.info.items)}
            <div className={'col-10 col-md-5 col-lg-3  img-enter d-flex align-items-center'}>
                <img alt={'book'} className={'col-12 entertaiment'}
                     src={props.info.items[0].volumeInfo.imageLinks.thumbnail}/>
                <img alt={'heart'} className={'col-3  icon'} src={hearticon}/>

            </div>

            <div className={'col-12 col-md-6 col-lg-8  img-enter d-flex align-items-center p-5'}>

                <div className={'row justify-content-around'}>

                    <h1 className={'col-12 text-center '}>{props.info.items[0].volumeInfo.title}</h1>
                    <h2 className={'col-12 mb-5'}>{props.info.items[0].volumeInfo.subtitle}</h2>
                    <p className={'col-12'}>{props.info.items[0].volumeInfo.description}</p>

                </div>
            </div>

        </section>}


    </div>)


};


export default IndividualEntertaiment;
