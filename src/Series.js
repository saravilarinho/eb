import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'


const Series = (props) => {
    return (

        <div>
            <h1 className="titulos pt-3 pb-3">SERIES</h1>

            <HorizontalList titulo={'Upcoming ...'} info={props.info_series} type={'Serie'} listacess={'yes'} content={'Upcoming'}/>

            <HorizontalList titulo={'Top Rated ...'} info={props.info_series} type={'Serie'} listacess={'yes'} content={'TopRated'}/>

            <HorizontalList titulo={'Popular ...'} info={props.info_series} type={'Serie'} listacess={'yes'} content={'Popular'}/>

            <HorizontalList titulo={'Favorites ...'} info={props.info_series} type={'Serie'} listacess={'no'}/>

        </div>
)
};


const mapStateToProps = (state) => {

    return {info_series: state.info_series}

};




export default connect(mapStateToProps)(Series);
