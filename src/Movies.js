import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'

const Movies = (props) =>{
    return (

        <div>
            <h1 className="titulos pt-3 pb-3">MOVIES</h1>

            <HorizontalList titulo={'Upcoming ...'} info={props.info_movies} type={'Movie'} listacess={'yes'} content={'Upcoming'}/>

            <HorizontalList titulo={'Top Rated ...'} info={props.info_movies} type={'Movie'} listacess={'yes'} content={'TopRated'}/>

            <HorizontalList titulo={'Popular ...'} info={props.info_movies} type={'Movie'} listacess={'yes'} content={'Popular'}/>

            <HorizontalList titulo={'Favorites ...'} info={props.info_movies} type={'Movie'} listacess={'no'}/>


        </div>
)


}

const mapStateToProps = (state) => {
    return {info_movies: state.info_movies}
};



export default connect(mapStateToProps)(Movies);
