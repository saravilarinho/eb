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

    render() {

        return (

            <div>

                {console.log(this.props.upcoming)}

                {this.props.upcoming !== false &&


                <section>

                    <h1 className="titulos pt-3 pb-3">MOVIES</h1>


                    {this.props.upcoming !== null ?

                        <HorizontalList titulo={'Upcoming ...'} info={this.props.upcoming} type={'Movie'}
                                        listacess={'yes'}
                                        content={'Upcoming'}/> : this.Loading('Upcoming')}

                    {this.props.top_rated !== null ?

                        <HorizontalList titulo={'Top Rated ...'} info={this.props.top_rated} type={'Movie'}
                                        listacess={'yes'}
                                        content={'TopRated'}/> : this.Loading('Upcoming')}

                    {this.props.popular !== null ?

                        <HorizontalList titulo={'Popular ...'} info={this.props.popular} type={'Movie'}
                                        listacess={'yes'}
                                        content={'Popular'}/> : this.Loading('Upcoming')}

                </section>}

                {this.props.upcoming === false &&

                <div>ERROR</div>
                }
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
