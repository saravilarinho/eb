import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'


const Series = (props) => {
    return (

        <div>
            <h1 className="titulos pt-3 pb-3">SERIES</h1>

            <HorizontalList titulo={'Tv on The Air ...'} info={props.tv_on_the_air} type={'Serie'} listacess={'yes'} content={'TVOnTheAir'}/>

            <HorizontalList titulo={'Top Rated ...'} info={props.top_rated} type={'Serie'} listacess={'yes'} content={'TopRated'}/>

            <HorizontalList titulo={'Popular ...'} info={props.popular} type={'Serie'} listacess={'yes'} content={'Popular'}/>

{/*
            <HorizontalList titulo={'Favorites ...'} info={props.info_series} type={'Serie'} listacess={'no'}/>
*/}

        </div>
)
};


const mapStateToProps = (state) => {

    return {tv_on_the_air: state.series.tv_on_the_air, top_rated: state.series.top_rated, popular: state.series.popular}

};




export default connect(mapStateToProps)(Series);
