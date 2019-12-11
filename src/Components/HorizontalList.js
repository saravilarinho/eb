import React from 'react';
import '../Styles/Styles.css';
import MiniatureEntertaiment from './MiniatureEntertaiment'
import arrowemblem from "../Images/arrow_emblem.svg"
import {Link} from 'react-router-dom'


const Line20 = (props) => {

    function sideScroll(element, direction, speed, distance, step) {
        let scrollAmount = 0;
        let slideTimer = setInterval(function () {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }


    return (


        <section>{(() => {
            if (props.listacess === "yes") {

                return <Link className={'titulos2'} to={{
                    pathname: '/List/' + props.type + "/" + props.content + "/1",
                    state: {title: props.title, content: props.content, type: props.type, page: 1}
                }}>
                    <div className={'titulos2 pt-3 pb-5'} id={props.content}>
                        <h1 className={'d-inline pt-2'}>{props.titulo}</h1>
                        <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>

                    </div>
                </Link>

            } else {
                return <div className={'titulos1 pt-5 pb-5'} id={props.content}>
                    <h1 className={'d-inline pt-2'}>{props.titulo}</h1>
                </div>
            }
        })()}


            <div className={'row justify-content-between controls w-100'}>
                <button className={'listentertaiment back'} id={"slideBack"} onClick={() => {
                    let container = document.getElementById(props.titulo);
                    sideScroll(container, 'left', 8, 400, 15);
                }}><img src={arrowemblem} className={'arrow'}/>
                </button>


                <button className={'listentertaiment front'} id={"slide"} onClick={() => {
                    let container = document.getElementById(props.titulo);
                    sideScroll(container, 'right', 8, 400, 15);
                }}><img src={arrowemblem} className={'arrow'}/>
                </button>
            </div>

            <ul className={'row justify-content-around pb-5'}>




                {(() => {
                    if (props.type === "Movie") {

                        return <li className="scroll-box col-12" id={props.titulo}>

                            {props.info.results.map((item) => <MiniatureEntertaiment img={item.poster_path}
                                                                                     text={item.overview}
                                                                                     title={item.title} id={item.id}
                                                                                     type={props.type}/>)}

                        </li>
                    }

                    if (props.type === 'Serie') {

                        return <li className="scroll-box col-12" id={props.titulo}>

                            {props.info.results.map((item) => <MiniatureEntertaiment img={item.poster_path}
                                                                                     text={item.overview}
                                                                                     title={item.name} id={item.id}
                                                                                     type={props.type}/>)}

                        </li>
                    }

                    if (props.type === 'Book') {

                        return <li className="scroll-box col-12" id={props.titulo}>

                            {props.info.map((item) => <MiniatureEntertaiment
                                img={item.imageLinks.thumbnail}
                                text={item.description}
                                title={item.title}
                                id={item.industryIdentifiers[0].identifier} type={props.type}/>
                            )}

                        </li>


                    }


                    if (props.type === "Favourite_Movie") {

                        console.log("ESTA NOS FAVES MOVIES");
                        console.log(props.movies);
                        return <li className="scroll-box col-12" id={props.titulo}>


                           {/* {props.movies.map((item) => <MiniatureEntertaiment img={item.poster_path}
                                                                                     text={item.overview}
                                                                                     title={item.title} id={item.id}
                                                                                     type={props.type}/>)}*/}

                        </li>

                    }

                })()}


            </ul>

        </section>

    );

};

export default Line20;
