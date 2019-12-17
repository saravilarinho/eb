import React from 'react';
import './Styles/Styles.css'
import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";
import {connect} from 'react-redux';
import {FetchAPI} from "./Actions/FetchAction";
import arrowleft from './Images/arrow_emblemleft-02.svg';
import arrowright from './Images/arrow_emblem.svg';
import {Link} from 'react-router-dom';
import poster_default from  './Images/dafaul_poster.png'
import {FetchActionFavorites} from "./Actions/FetchActionFavorites";
import {Clear_dashboard} from "./Actions/Clear_dashboard";
import {SetFavourites} from "./Actions/SetFavourites";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_update: this.props.match.params.page,
            movies: 0,
            series: 0,
            books:0
        }
    }

    componentDidMount() {


        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;
        let page = this.props.match.params.page;

        this.props.Clear_dashboard('Movies');
        this.props.Clear_dashboard('Series');
        this.props.Clear_dashboard('Books');

        switch (Type) {
            case 'Movie':
                switch (Content) {
                    case 'TopRated':
                        this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'top_rated', 'movies');
                        break;
                    case 'Upcoming':
                        this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'upcoming', 'movies');
                        break;
                    case 'Popular':
                        this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'popular', 'movies');
                        break;
                    default:
                        this.props.FetchAPI("https://api.themoviedb.org/3/search/movie?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + Content + "%&page="+page+"&include_adult=false", 'search', 'movies');

                        break
                }

                break;
            case 'Serie':
                switch (Content) {
                    case 'TVOnTheAir':
                        this.props.FetchAPI("https://api.themoviedb.org/3/tv/on_the_air?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'tv_on_the_air', 'series');
                        break;
                    case 'TopRated':
                        this.props.FetchAPI("https://api.themoviedb.org/3/tv/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'top_rated', 'series');
                        break;
                    case 'Popular':
                        this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'popular', 'series');
                        break;

                    default:
                        this.props.FetchAPI("https://api.themoviedb.org/3/search/tv?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + Content + "&page=" + page, 'search', 'series');
                        break
                }

                break;

            case 'Book':

                switch (Content) {

                    case 'Fiction':
                        console.log('hi');
                        break;
                    case 'NonFiction':
                        console.log('hi');
                        break;

                    default:
                        this.props.FetchAPI('https://www.googleapis.com/books/v1/volumes?q=' + Content + '&maxResults=20&key=AIzaSyAiDQzrYuazi4kakyEopdexfMzPXwxqwqw', 'search', 'books');
                        break
                }
                break;

        }
    }



    GetAndCheckUserFavorites = () => {
        const db = firebase.firestore();


        db.collection("favorites").where("id", "==",this.props.user.uid)
            .get()
            .then((querySnapshot) => {

                if (querySnapshot.docs.length > 0) {

                    querySnapshot.forEach((doc) => {
                        let data = doc.data();
                        this.props.SetFavourites(data.movies, data.series, data.books, doc.id)

                    });
                }

            })


    };

    PageMove = (direction) => {

        this.props.Clear_dashboard('Movies');
        this.props.Clear_dashboard('Series');
        this.props.Clear_dashboard('Books');



        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;

        if (direction === "mais") {
            this.state.page_update = parseInt(this.state.page_update) + 1;

        } else {

            this.state.page_update = parseInt(this.state.page_update) - 1;


        }

        switch (Type) {
            case 'Movie':
                switch (Content) {
                    case 'TopRated':
                        this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'top_rated', 'movies');
                        this.setState({page_update: this.state.page_update});
                        break;
                    case 'Upcoming':
                        this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'upcoming', 'movies');
                        this.setState({page_update: this.state.page_update});
                        break;
                    case 'Popular':
                        this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'popular', 'movies');
                        this.setState({page_update: this.state.page_update});
                        break;
                    case 'Favorites':
                        this.props.FetchActionFavorites(this.props.user.favorites.movies, 'Movies', this.state.page_update);
                        this.setState({page_update: this.state.page_update});
                        break;
                    default:
                        this.props.FetchAPI("https://api.themoviedb.org/3/search/movie?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + Content + "%&page="+this.state.page_update+"&include_adult=false", 'search', 'movies');
                        this.setState({page_update: this.state.page_update});
                        break
                }

                break;
            case 'Serie':
                switch (Content) {
                    case 'TVOnTheAir':
                        this.props.FetchAPI("https://api.themoviedb.org/3/tv/on_the_air?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'tv_on_the_air', 'series');
                        this.setState({page_update: this.state.page_update});
                        break;
                    case 'TopRated':
                        this.props.FetchAPI("https://api.themoviedb.org/3/tv/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'top_rated', 'series');
                        this.setState({page_update: this.state.page_update});
                        break;
                    case 'Popular':
                        this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'popular', 'series');
                        this.setState({page_update: this.state.page_update});
                        break;
                    case 'Favorites':
                        this.props.FetchActionFavorites(this.props.user.favorites.series, 'Series', this.state.page_update);
                        this.setState({page_update: this.state.page_update});
                        break;
                    default:
                        this.props.FetchAPI("https://api.themoviedb.org/3/search/tv?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + Content + "&page=" + this.state.page_update, 'search', 'series');
                        this.setState({page_update: this.state.page_update});
                        break
                }
                break;
            case 'Book':

                switch (Content) {

                    case 'Fiction':
                        console.log('hi');
                        break;
                    case 'NonFiction':
                        console.log('hi');
                        break;
                    case 'Favorites':
                        this.props.FetchActionFavorites(this.props.user.favorites.books, 'Books', this.state.page_update);
                        break;
                    default:
                        this.props.FetchAPI('https://www.googleapis.com/books/v1/volumes?q=' + Content + '&startIndex='+(this.state.page_update -1)*19+'&maxResults=20&key=AIzaSyAiDQzrYuazi4kakyEopdexfMzPXwxqwqw', 'search', 'books');
                        this.setState({page_update: this.state.page_update});
                        break
                }
                    break

        }


    };

    CheckContentOfLisit = () => {

        let info = null;
        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;

        switch (Type) {
            case 'Movie':
                switch (Content) {
                    case 'TopRated':
                        info = this.props.movies.top_rated;
                        break;
                    case 'Upcoming':
                        info = this.props.movies.upcoming;
                        break;
                    case 'Popular':
                        info = this.props.movies.popular;
                        break;
                    case 'Favorites':
                        info = this.props.user.favorites.movies_content;
                        break;

                    default:
                        info = this.props.search.movies;
                        break
                }

                break;
            case 'Serie':
                switch (Content) {
                    case 'TVOnTheAir':
                        info = this.props.series.tv_on_the_air;
                        break;
                    case 'TopRated':
                        info = this.props.series.top_rated;
                        break;
                    case 'Popular':
                        info = this.props.series.popular;
                        break;
                    case 'Favorites':
                        info = this.props.user.favorites.series_content;
                        break;
                    default:
                        info = this.props.search.series;
                        break
                }
                break;

            case 'Book':

                switch (Content) {

                    case 'Fiction':
                        console.log('hi');
                        break;
                    case 'NonFiction':
                        console.log('hi');
                        break;
                    case 'Favorites':
                        info = this.props.user.favorites.books_content;
                        break;
                    default:
                        info = this.props.search.books;
                        break
                }
                break

        }

        return info

    };

    CheckIfTitleNeedsSpace = (WrittenContent) => {

        let New = WrittenContent;

        if (WrittenContent === "TopRated") {

            New = "Top Rated"
        }

        if (WrittenContent === "TVOnTheAir") {

            New = "TV On The Air"
        }

        if (WrittenContent === "AllBestSellers") {

            New = "All Best Sellers"
        }

        return New

    };

    render() {



        const Type = this.props.match.params.type;

        const Content = this.props.match.params.content;

        if (this.props.user.login !== false && this.props.user.favorites.movies.length > 0 && this.state.movies === 0 && Type === 'Movie' && Content=== 'Favorites'){
            this.props.FetchActionFavorites(this.props.user.favorites.movies, 'Movies', this.props.match.params.page);
            this.setState({movies: 1});
        }

        if (this.props.user.login !== false && this.props.user.favorites.series.length > 0 && this.state.series === 0 && Type === 'Serie' && Content=== 'Favorites'){
            this.props.FetchActionFavorites(this.props.user.favorites.series, 'Series', this.props.match.params.page);
            this.setState({series: 1});
        }

        if (this.props.user.login !== false && this.props.user.favorites.books.length > 0 && this.state.books === 0 && Type === 'Book' && Content=== 'Favorites'){
            this.props.FetchActionFavorites(this.props.user.favorites.books, 'Books', this.props.match.params.page);
            this.setState({books: 1});
        }

        let info = this.CheckContentOfLisit();

        let WrittenContent = this.CheckIfTitleNeedsSpace(Content);

        let page_next = parseInt(this.props.match.params.page) + 1;

        let page_prev = parseInt(this.props.match.params.page) - 1;

        console.log(this.props.user.favorites.books_content);


        return (

            <div>
                <h1 className="titulos pt-3 pb-5">{Type + "s - " + WrittenContent}</h1>

                <div className={'ml-5'}>


                    {Type === 'Movie' && info !== null &&

                    info.results.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                      title={item.title} id={item.id} type={"Movie"} func={this.GetAndCheckUserFavorites}/>)
                    }


                    {Type === 'Serie' && info !== null &&

                    info.results.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                      title={item.name} id={item.id} type={'Serie'} func={this.GetAndCheckUserFavorites}/>)
                    }



                   {Type === 'Book'  && info !== null && Content !== 'Favorites' &&

                    info.items.map((item) => {
                        console.log(item);
                        return <MiniatureEntertaiment img={item.volumeInfo.imageLinks === undefined ? poster_default : item.volumeInfo.imageLinks.thumbnail} text={item.volumeInfo.description}
                                                                     title={item.volumeInfo.title} id={Array.isArray(item.volumeInfo.industryIdentifiers) === true?
                            item.volumeInfo.industryIdentifiers[0].identifier : 0} type={'Book'} func={this.GetAndCheckUserFavorites}/>
                    })
                   }

                    {Type === 'Book'  && info !== null && Content === 'Favorites' &&

                    info.map((item) => {
                        return <MiniatureEntertaiment img={item.imageLinks === undefined ? poster_default : item.imageLinks.thumbnail} text={item.description}
                                                      title={item.title} id={Array.isArray(item.industryIdentifiers) === true?
                            item.industryIdentifiers[0].identifier : 0} type={'Book'} func={this.GetAndCheckUserFavorites}/>
                    })
                    }


                </div>

                <div className={'row rowpaginacao justify-content-center'}>

                    {this.props.match.params.page > 1 ?

                        <Link to={'/List/' + Type + '/' + Content + '/' + page_prev} onClick={() => {
                            this.PageMove("menos");
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}
                              className={'arrowleft '}>
                            <img className={"img-fluid pb-5 paginacaoleft align-items-right m-5"} name={"left"}
                                 src={arrowleft}/>
                        </Link> :
                        <img width={100} className={"img-fluid pb-5 paginacaoleft align-items-right m-5"}
                             style={{opacity: 0.3}} name={"left"}
                             src={arrowleft}/>

                    }


                    <Link to={'/List/' + Type + '/' + Content + '/' + page_next} onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'});
                        this.PageMove("mais")
                    }}
                          className={' arrowright'}>
                        <img width={100} className={"img-fluid pb-5 my-5 mx-3 paginacaoright align-items-left"}
                             name={"right"}
                             src={arrowright}/>
                    </Link>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: {
            upcoming: state.movies.upcoming,
            top_rated: state.movies.top_rated,
            popular: state.movies.popular
        },

        series: {
            tv_on_the_air: state.series.tv_on_the_air,
            top_rated: state.series.top_rated,
            popular: state.series.popular
        },

        books: {

            all_bestsellers: state.books.all_bestsellers

        },

        search: state.search,
        user: state.users,

    }
};


const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content)),
        FetchActionFavorites: (IDS, type_content, page) => { dispatch(FetchActionFavorites(IDS,type_content, page))},
        Clear_dashboard: (type_content) => {dispatch(Clear_dashboard(type_content))},
        SetFavourites: (movies, series, books, id) => {
            dispatch(SetFavourites(movies, series, books, id))
        }


    }

};

export default connect(mapStateToProps, mapDispatchtoProps)(List);