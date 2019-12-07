import React from 'react';
import './Styles/Styles.css'
import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {FetchAPI} from "./Actions/FetchAction";
import arrowleft from './Images/arrow_emblemleft-02.svg';
import arrowright from './Images/arrow_emblem.svg';
import {Link} from 'react-router-dom';


class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_update:  this.props.match.params.page
        }
    }

    componentDidMount() {
        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;
        let page = this.props.match.params.page;


        if (page !== this.props.movies.upcoming.page) {



            if (Type === "Movie") {


                if (Content === "TopRated") {

                    this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'top_rated', 'movies');
                }

                if (Content === "Upcoming") {

                    this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'upcoming', 'movies');
                }


                if (Content === "Popular") {

                    this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'popular', 'movies');
                }

            }

            if (Type === "Serie") {

                if (Content === "TVOnTheAir") {
                    this.props.FetchAPI("https://api.themoviedb.org/3/tv/on_the_air?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'tv_on_the_air', 'series');
                }

                if (Content === "TopRated") {
                    this.props.FetchAPI("https://api.themoviedb.org/3/tv/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'top_rated', 'series');
                }


                if (Content === "Popular") {
                    this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + page, 'popular', 'series');
                }
            }

            if (Type === "Book") {


            }

        }

    }

    incrementamais = () => {

        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;

        this.state.page_update = parseInt(this.state.page_update) + 1;

        if (Type === "Movie") {


            if (Content === "TopRated") {

                this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'top_rated', 'movies');
                this.setState({page_update: this.state.page_update})

            }

            if (Content === "Upcoming") {

                this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'upcoming', 'movies');
                this.setState({page_update: this.state.page_update})

            }


            if (Content === "Popular") {

                this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'popular', 'movies');
                this.setState({page_update: this.state.page_update})

            }

        }

        if (Type === "Serie") {

            if (Content === "TVOnTheAir") {
                this.props.FetchAPI("https://api.themoviedb.org/3/tv/on_the_air?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'tv_on_the_air', 'series');
                this.setState({page_update: this.state.page_update})

            }

            if (Content === "TopRated") {
                this.props.FetchAPI("https://api.themoviedb.org/3/tv/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'top_rated', 'series');
                this.setState({page_update: this.state.page_update})

            }


            if (Content === "Popular") {
                this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'popular', 'series');
                this.setState({page_update: this.state.page_update})

            }
        }

        if (Type === "Book") {


        }

    };


    incrementamenos = () => {

        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;

        if(this.state.page_update >= 1 ) {

            this.state.page_update = parseInt(this.state.page_update) - 1;

            if (Type === "Movie") {


                if (Content === "TopRated") {

                    this.props.FetchAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'top_rated', 'movies');
                    this.setState({page_update: this.state.page_update})

                }

                if (Content === "Upcoming") {

                    this.props.FetchAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'upcoming', 'movies');
                    this.setState({page_update: this.state.page_update})
                }


                if (Content === "Popular") {

                    this.props.FetchAPI("https://api.themoviedb.org/3/movie/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'popular', 'movies');
                    this.setState({page_update: this.state.page_update})

                }

            }

            if (Type === "Serie") {

                if (Content === "TVOnTheAir") {
                    this.props.FetchAPI("https://api.themoviedb.org/3/tv/on_the_air?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'tv_on_the_air', 'series');
                    this.setState({page_update: this.state.page_update})

                }

                if (Content === "TopRated") {
                    this.props.FetchAPI("https://api.themoviedb.org/3/tv/top_rated?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'top_rated', 'series');
                    this.setState({page_update: this.state.page_update})

                }


                if (Content === "Popular") {
                    this.props.FetchAPI("https://api.themoviedb.org/3/tv/popular?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&page=" + this.state.page_update, 'popular', 'series');
                    this.setState({page_update: this.state.page_update})

                }
            }

            if (Type === "Book") {


            }
        }
    };


    render() {
        let info = "";
        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;

        if (Type === "Movie") {


            if (Content === "TopRated") {

                info = this.props.movies.top_rated;
            }

            if (Content === "Upcoming") {

                info = this.props.movies.upcoming;
            }


            if (Content === "Popular") {

                info = this.props.movies.popular;
            }

        }

        if (Type === "Serie") {

            if (Content === "TVOnTheAir") {

                info = this.props.series.tv_on_the_air;
            }

            if (Content === "TopRated") {

                info = this.props.series.top_rated;
            }


            if (Content === "Popular") {

                info = this.props.series.popular;
            }


        }

        if (Type === "Book") {

            if (Content === "AllBestSellers") {

                info = this.props.books.all_bestsellers
            }


        }

        if (info === "") {

            return <Redirect to='/Homepage'/>

        }


        let WrittenContent = Content;

        if (WrittenContent === "TopRated") {

            WrittenContent = "Top Rated"
        }

        if (WrittenContent === "TVOnTheAir") {

            WrittenContent = "TV On The Air"
        }

        if (WrittenContent === "AllBestSellers") {

            WrittenContent = "All Best Sellers"
        }


        let page_next = parseInt(this.props.match.params.page) + 1;

        return (

            <div>
                <h1 className="titulos pt-3 pb-5">{Type + "s - " + WrittenContent}</h1>

                <div className={'ml-5'}>


                    {Type === 'Movie' &&

                    info.results.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                      title={item.title} id={item.id} type={"Movie"}/>)
                    }


                    {Type === 'Serie' &&

                    info.results.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                      title={item.name} id={item.id} type={'Serie'}/>)
                    }

                    {Type === 'Book' &&

                    info.map((item) => <MiniatureEntertaiment img={item.items[0].volumeInfo.imageLinks.thumbnail}
                                                              text={item.items[0].volumeInfo.description}
                                                              title={item.items[0].volumeInfo.title}
                                                              id={item.items[0].volumeInfo.industryIdentifiers[0].identifier}
                                                              type={'Book'}/>)
                    }

                </div>



                <div className={'row rowpaginacao'}>
                    <Link to={'/List/' + Type + '/' + Content + '/' + page_next} onClick={this.incrementamenos} className={'col-md-2 col-sm-6 mt-4 arrowleft pt-1 mr-5'}>
                        <img className={"img-fluid pb-5 paginacaoleft align-items-right"} name={"left"}
                             src={arrowleft}/>
                    </Link>

                    <Link to={'/List/' + Type + '/' + Content + '/' + page_next} onClick={this.incrementamais} className={'col-md-2 mt-4 col-sm-6 arrowright pt-1 mr-5'}>
                        <img className={"img-fluid pb-5 paginacaoright align-items-left"} name={"right"}
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

        }
    }
};


const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content))
    }

};

export default connect(mapStateToProps, mapDispatchtoProps)(List);