import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'
import {FetchAPI} from "./Actions/FetchAction";

class Movies extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'upcoming', 'movies');
        this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'top_rated', 'movies');
        this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=1", 'popular', 'movies');

    }

    render() {

        return (

            <div>
                <h1 className="titulos pt-3 pb-3">MOVIES</h1>

                <HorizontalList titulo={'Upcoming ...'} info={this.props.upcoming} type={'Movie'} listacess={'yes'}
                                content={'Upcoming'}/>

                <HorizontalList titulo={'Top Rated ...'} info={this.props.top_rated} type={'Movie'} listacess={'yes'}
                                content={'TopRated'}/>

                <HorizontalList titulo={'Popular ...'} info={this.props.popular} type={'Movie'} listacess={'yes'}
                                content={'Popular'}/>*!/}

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {upcoming: state.movies.upcoming, top_rated: state.movies.top_rated, popular: state.movies.popular}
};

const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content))
    }

};


export default connect(mapStateToProps, mapDispatchtoProps)(Movies);
