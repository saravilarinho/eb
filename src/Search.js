import React from 'react';
import './Styles/Styles.css'
import {connect} from 'react-redux';
import HorizontalList from './Components/HorizontalList'
import {FetchAPI} from "./Actions/FetchAction";
import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";
import {ConnectAPI} from "./Actions/ConnectAPI";

let books = require('google-books-catalogue-search');

let options = {

    field: 'title',
    offset: 0,
    limit: 20,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};


class Movies extends React.Component {


    constructor(props) {

        super(props);
        this.state = {term: ''}

    }

    componentDidMount() {


        let word = this.props.match.params.word_search;
        this.state.term = word;
        this.props.FetchAPI("https://api.themoviedb.org/3/search/movie?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "%&page=1&include_adult=false", 'search', 'movies');
        this.props.FetchAPI("https://api.themoviedb.org/3/search/tv?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "&page=1", 'search', 'series');
        this.props.FetchAPI('https://www.googleapis.com/books/v1/volumes?q=' + word + '&maxResults=20&key=AIzaSyCg9iTNiLd_9f9k55g2wrxjJOTpdokFZqs', 'search', 'books');


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        let word = this.props.match.params.word_search;

        if (word !== this.state.term) {

            this.props.FetchAPI("https://api.themoviedb.org/3/search/movie?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "%&page=1&include_adult=false", 'search', 'movies');
            this.props.FetchAPI("https://api.themoviedb.org/3/search/tv?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "&page=1", 'search', 'series');
            this.props.FetchAPI('https://www.googleapis.com/books/v1/volumes?q=' + word + '&key=AIzaSyCg9iTNiLd_9f9k55g2wrxjJOTpdokFZqs', 'search', 'books');
            this.setState({term: word})
        }

    }


    BooksArray = (p) => {

        let array = [];
        p.map(item => array.push(item.volumeInfo));
        return array

    };

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


        let arraybooks = [];

        if (this.props.search.books !== null && this.props.search.books.totalItems) {

            arraybooks = this.BooksArray(this.props.search.books.items);

        }
        return (

            <div>

                {console.log(this.props.search.series)}

                {this.props.search.movies !== null ?

                    <section>
                        <h1 className="titulos pt-3 pb-3">MOVIES</h1>

                        {this.props.search.movies.results.length !== 0 &&
                        <div>
                            <small
                                className={'px-5'}>{this.props.search.movies.total_results} resultado{this.props.search.movies.total_results > 1 ? 's' : ''}</small>
                            <HorizontalList titulo={'View More ...'} info={this.props.search.movies} type={'Movie'}
                                            listacess={'yes'} content={this.props.match.params.word_search}
                            /></div>
                        }

                        {this.props.search.movies.results.length === 0 &&

                        <p className={'p-5 font-weight-light text-uppercase'}>No Movies Found...</p>

                        }


                    </section> : this.Loading
                }


                {this.props.search.series !== null ?

                    <section>
                        <h1 className="titulos pt-3 pb-3">SERIES</h1>


                        {this.props.search.series.results.length !== 0 &&
                        <div>
                            <small className={'p-5'}>{this.props.search.series.total_results} resultado{this.props.search.series.total_results > 1 ? 's' : ''}</small>
                            <HorizontalList titulo={'View More ...'} info={this.props.search.series} type={'Serie'}
                                            listacess={'yes'} content={this.props.match.params.word_search}
                            />
                        </div>}


                        {this.props.search.series.results.length === 0 &&

                        <p className={'p-5 font-weight-light text-uppercase'}>No Series Found...</p>

                        }

                    </section> : this.Loading
                }

                {this.props.search.books !== null ?

                    <section>
                        <h1 className="titulos pt-3 pb-3">BOOKS</h1>


                        {this.props.search.books.totalItems !== 0 &&

                        <div>

                            <small className={'p-5'}>{this.props.search.books.totalItems} resultado{this.props.search.books.totalItems > 1 ? 's' : ''}</small>

                            <HorizontalList titulo={'View More ...'} info={arraybooks} type={'Book'}
                                            listacess={'yes'} content={this.props.match.params.word_search} />

                        </div>
                        }

                        {this.props.search.books.totalItems === 0 &&

                        <p className={'p-5 font-weight-light text-uppercase'}>No Books Found...</p>

                        }
                    </section> : this.Loading
                }


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
    }

};


export default connect(mapStateToProps, mapDispatchtoProps)(Movies);
