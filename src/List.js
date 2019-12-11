import React from 'react';
import './Styles/Styles.css'
import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";
import {connect} from 'react-redux';
import {FetchAPI} from "./Actions/FetchAction";
import arrowleft from './Images/arrow_emblemleft-02.svg';
import arrowright from './Images/arrow_emblem.svg';
import {Link} from 'react-router-dom';


class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_update: this.props.match.params.page
        }
    }

    componentDidMount() {


        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;
        let page = this.props.match.params.page;

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


    }

    PageMove = (direction) => {

        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;

        if (direction === "mais") {


            this.state.page_update = parseInt(this.state.page_update) + 1;

        } else {

            this.state.page_update = parseInt(this.state.page_update) - 1;


        }


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
                }
                break;

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

        let info = this.CheckContentOfLisit();

        let WrittenContent = this.CheckIfTitleNeedsSpace(Content);

        let page_next = parseInt(this.props.match.params.page) + 1;

        let page_prev = parseInt(this.props.match.params.page) - 1;



        return (

            <div>
                <h1 className="titulos pt-3 pb-5">{Type + "s - " + WrittenContent}</h1>

                <div className={'ml-5'}>


                    {Type === 'Movie' && info !== null &&

                    info.results.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                      title={item.title} id={item.id} type={"Movie"}/>)
                    }


                    {Type === 'Serie' && info !== null &&

                    info.results.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                      title={item.name} id={item.id} type={'Serie'}/>)
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
                        <img width={100} className={"img-fluid pb-5 paginacaoleft align-items-right m-5"} style={{opacity:0.3}} name={"left"}
                             src={arrowleft}/>

                    }


                    <Link to={'/List/' + Type + '/' + Content + '/' + page_next} onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'});
                        this.PageMove("mais")
                    }}
                          className={' arrowright'}>
                        <img width={100}  className={"img-fluid pb-5 my-5 mx-3 paginacaoright align-items-left"} name={"right"}
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