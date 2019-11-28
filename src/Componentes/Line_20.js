import React, {Component} from 'react';
import '../Styles.css';
import ListEntertaiment from '../Componentes/ListEntertaiment'
import arrowfront from "../IMGS/chevron-front-solid.svg";
import arrowback from "../IMGS/chevron-back-solid.svg";



class Line20 extends Component {

    render() {


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



                <section >
                    <ul className={'row justify-content-around'}>

                        <li className="scroll-box col-12" id={'container'}>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                            <ListEntertaiment/>
                        </li>
                    </ul>
                    <div className={'row carcontrol'}>
                        <li className={'col-1 text-center h-100'}>
                            <button className={' prev w-100 h-100'} id={"slideBack"} onClick={() => {
                                let container = document.getElementById('container');
                                sideScroll(container, 'left', 8, 400, 15);
                            }}> <img src={arrowback} className={'img-fluid p-3'}/>
                            </button>
                        </li>
                        <li className={'col-10'}></li>
                        <li className={' col-1 text-center h-100'}>
                            <button className={'w-100 next h-100'} id={"slide"} onClick={() => {
                                let container = document.getElementById('container');
                                sideScroll(container, 'right', 8, 400, 15);
                            }}>  <img src={arrowfront} className={'img-fluid p-3'}/>
                            </button>

                        </li>

                    </div>
                </section>

        );
    }
}

export default Line20;
