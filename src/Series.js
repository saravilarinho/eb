import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'
import {FetchAPI} from "./Actions/FetchAction";


class Series extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

        this.props.FetchAPI("https://api.themoviedb.org/3/tv/on_the_air?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'tv_on_the_air', 'series');
        this.props.FetchAPI("https://api.themoviedb.org/3/tv/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'top_rated', 'series');
        this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'popular', 'series');
    }

    render(){


        return (


            <div>
                <h1 className="titulos pt-3 pb-3">SERIES</h1>


                <HorizontalList titulo={'Tv on The Air ...'} info={this.props.tv_on_the_air} type={'Serie'} listacess={'yes'} content={'TVOnTheAir'}/>

                <HorizontalList titulo={'Top Rated ...'} info={this.props.top_rated} type={'Serie'} listacess={'yes'} content={'TopRated'}/>

                <HorizontalList titulo={'Popular ...'} info={this.props.popular} type={'Serie'} listacess={'yes'} content={'Popular'}/>

            </div>


        /*
                    <div>
                        <h1 className="titulos pt-3 pb-3">SERIES</h1>

                        <HorizontalList titulo={'Tv on The Air ...'} info={props.tv_on_the_air} type={'Serie'} listacess={'yes'} content={'TVOnTheAir'}/>

                        <HorizontalList titulo={'Top Rated ...'} info={props.top_rated} type={'Serie'} listacess={'yes'} content={'TopRated'}/>

                        <HorizontalList titulo={'Popular ...'} info={props.popular} type={'See'} listacess={'yes'} content={'Popular'}/>

                        {/*
                    <HorizontalList titulo={'Favorites ...'} info={props.info_series} type={'Serie'} listacess={'no'}/>
        }

            </div>*/


        )


    }


}


const mapStateToProps = (state) => {

    return {tv_on_the_air: state.series.tv_on_the_air, top_rated: state.series.top_rated, popular: state.series.popular}

};


const mapDispatchtoProps = (dispatch) => {
    return{
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content))
    }

};




export default connect(mapStateToProps, mapDispatchtoProps)(Series);
