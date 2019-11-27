import React from 'react';
import '../Styles.css';


function IndividualEntertaiment() {


    return (
        <div className={"row IndividualEntertaiment justify-content-around m-5"}>


            <div className={'col-10 col-md-5 col-lg-3  img-enter'}>
                <img className={'col-12 entertaiment'} src={'IMGS/8b6b6ae81b05a817ac275d45fa09e18f10bf5c78_hq.jpg'}/>
                <img className={'col-12  icon'} src={'IMGS/eye_icon.png'}/>
            </div>

            <div className={'col-10 col-md-6 col-lg-8  img-enter'}>

                <h1>Titulo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum turpis est. Aliquam
                    mollis urna nec dui bibendum tempus. Praesent vel condimentum dolor. Pellentesque quis finibus
                    tortor, non scelerisque magna. Maecenas auctor eleifend auctor. Cras auctor nunc nec semper
                    pulvinar. Etiam tempor enim nec lacus scelerisque volutpat. Duis eu magna quis ligula elementum
                    pellentesque. Vivamus pretium elit non laoreet viverra. Nunc feugiat felis sit amet lorem fringilla,
                    et posuere nulla tincidunt.</p>

            </div>

        </div>

    );
}

export default IndividualEntertaiment;
