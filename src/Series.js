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


    Loading = (typebook) => {

        return <section className={'row justify-content-center my-5'}>

            <div className="spinner-border text-warning loadingsmall d-inline-block" id={'loading'}
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className={'col-12 my-3'}>
                <section className={'row loadingtitle justify-content-center'}>
                    <small className={'col-4 col-md-2 pl-3'}>Loading {typebook} Books</small>
                </section>
            </div>
        </section>

    };

    render(){


        return (


            <div>
                <h1 className="titulos pt-3 pb-3">SERIES</h1>


                <section>

                    {console.log(this.props.tv_on_the_air)}

                    {this.props.tv_on_the_air !== null ?

                        <HorizontalList titulo={'Tv on The Air ...'} info={this.props.tv_on_the_air} type={'Serie'} listacess={'yes'} content={'TVOnTheAir'}/>
                        : this.Loading('Upcoming')}

                    {this.props.top_rated !== null ?

                        <HorizontalList titulo={'Top Rated ...'} info={this.props.top_rated} type={'Serie'} listacess={'yes'} content={'TopRated'}/>
                        : this.Loading('Upcoming')}

                    {this.props.popular !== null ?

                        <HorizontalList titulo={'Popular ...'} info={this.props.popular} type={'Serie'} listacess={'yes'} content={'Popular'}/> : this.Loading('Upcoming')}

                </section>


            </div>

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
