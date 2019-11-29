import React from 'react';
import '../Styles.css';
import ListEntertaiment from '../Componentes/ListEntertaiment'
import arrowfront from "../IMGS/chevron-front-solid.svg";
import arrowback from "../IMGS/chevron-back-solid.svg";


const Line20 = (props) =>  {

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


            <section>

                <h1 className={'titulos2 pb-5'}>{props.titulo}</h1>

                <div className={'row justify-content-between controls w-100'}>
                    <button className={'listentertaiment back'} id={"slideBack"} onClick={() => {
                        let container = document.getElementById(props.titulo);
                        sideScroll(container, 'left', 8, 400, 15);
                    }}><img src={arrowback} className={'arrow'}/>
                    </button>


                    <button className={'listentertaiment front'} id={"slide"} onClick={() => {
                        let container = document.getElementById(props.titulo);
                        sideScroll(container, 'right', 8, 400, 15);
                    }}><img src={arrowfront} className={'arrow'}/>
                    </button>
                </div>

                <ul className={'row justify-content-around '}>


                    <li className="scroll-box col-12" id={props.titulo}>

                        {props.info.map((item) => <ListEntertaiment img={item.poster_path} text={item.overview} title={item.title}/>)}

                    </li>


                </ul>

            </section>

        );

};

export default Line20;
