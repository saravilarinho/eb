import React, {Component} from 'react';
import '../Styles.css';
import ListEntertaiment from '../Componentes/ListEntertaiment'


class Line20 extends Component {

    render() {

        return (


            <section>

                <h1 className={'titulos2 pb-5'}>Os Mais Populares...</h1>

                <ul className={'row justify-content-around mt-4'}>


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

            </section>

        );
    }
}

export default Line20;
