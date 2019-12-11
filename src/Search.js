import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'
import {FetchAPI} from "./Actions/FetchAction";

const books = require('google-books-catalogue-search');


class Movies extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {


        let word = this.props.match.params.word_search;


        this.props.FetchAPI("https://api.themoviedb.org/3/search/movie?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "%&page=1&include_adult=false", 'search', 'movies');
        this.props.FetchAPI("https://api.themoviedb.org/3/search/tv?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "&page=1", 'search', 'series');

        books.search(word, function (error, results) {
            if (!error) {


                console.log(results);
            }
        });

    }


    Loading = () => {

        return <section className={'row justify-content-center my-5'}>

            <div className="spinner-border text-warning loadingsmall d-inline-block" id={'loading'}
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className={'col-12 my-3'}>
                <section className={'row loadingtitle justify-content-center'}>
                    <small className={'col-4 col-md-2 pl-3'}>Loading</small>
                </section>
            </div>
        </section>

    };

    render() {

        return (

            <div>

                {console.log(this.props.search.series)}

                {this.props.search.movies !== null ?

                    <section>
                        <h1 className="titulos pt-3 pb-3">MOVIES</h1>

                        <HorizontalList titulo={'View More ...'} info={this.props.search.movies} type={'Movie'}
                                        listacess={'yes'} content={this.props.match.params.word_search}
                        />
                    </section> : this.Loading
                }


                {this.props.search.series !== null ?

                    <section>
                        <h1 className="titulos pt-3 pb-3">SERIES</h1>

                        <HorizontalList titulo={'View More ...'} info={this.props.search.series} type={'Serie'}
                                        listacess={'yes'} content={this.props.match.params.word_search}
                        />
                    </section> : this.Loading
                }


                {/*
                {this.props.upcoming !== false &&


                <section>




                    {this.props.upcoming !== null ?



                    {this.props.top_rated !== null ?

                        <HorizontalList titulo={'Top Rated ...'} info={this.props.top_rated} type={'Movie'}
                                        listacess={'yes'}
                                        content={'TopRated'}/> : this.Loading('Top Rated')}

                    {this.props.popular !== null ?

                        <HorizontalList titulo={'Popular ...'} info={this.props.popular} type={'Movie'}
                                        listacess={'yes'}
                                        content={'Popular'}/> : this.Loading('Popular')}

                </section>}

                {this.props.upcoming === false &&

                <div>ERROR</div>
                }*/}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {search: state.search}
};

const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content)),
        FetchBook: (results,content, type_content) => {
            dispatch({type: 'FETCH_API',result:results,content: content, type_content: type_content})
        }
    }

};


export default connect(mapStateToProps, mapDispatchtoProps)(Movies);
