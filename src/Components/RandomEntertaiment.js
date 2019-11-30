import React from 'react';
import '../Styles/Styles.css';
import IndividualEntertaiment from './IndividualEntertaiment'


function RandomEntertaiment() {
    return (
        <div>

            <section className={'row justify-content-center EnterButton'}>
                <button className={'col-3'}>I'M BORED</button>
            </section>
            <IndividualEntertaiment/>

        </div>
    );
}

export default RandomEntertaiment;
