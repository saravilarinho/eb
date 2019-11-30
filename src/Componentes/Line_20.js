import React from 'react';
import '../Styles.css';
import ListEntertaiment from '../Componentes/ListEntertaiment'
import arrowemblem from "../IMGS/arrow-emblem.svg"
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

                return<Link className={'titulos2'}  to={{pathname : '/List/'+props.content,state:{title: props.title, content:props.content,type:props.type,page:1}}}><div className={'titulos2 pt-5 pb-5'}>
                    <h1 className={'d-inline pt-2'}>{props.titulo}</h1>
                    <img src={arrowemblem} className={'d-inline arrowemblem'} width={30}/>

                </div></Link>

            }
            else{
                return <div className={'titulos1 pt-5 pb-5'}>
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
                    if (props.type === "movie") {

                        return <li className="scroll-box col-12" id={props.titulo}>

                            {props.info.map((item) => <ListEntertaiment img={item.poster_path} text={item.overview}
                                                                        title={item.title} id={item.id}/>)}

                        </li>
                    }

                    if (props.type === 'serie') {

                        return <li className="scroll-box col-12" id={props.titulo}>

                            {props.info.map((item) => <ListEntertaiment img={item.poster_path} text={item.overview}
                                                                        title={item.name} id={item.id}/>)}

                        </li>
                    }
                })()}


            </ul>

        </section>

    );

};

export default Line20;
