import React from 'react';
import './Styles/Styles.css'
import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'



class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;
        let info = "";


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

        if (info===""){

            return <Redirect to='/Homepage' />

        }

        let WrittenContent = Content;

        if (WrittenContent==="TopRated"){

            WrittenContent = "Top Rated"
        }

        if (WrittenContent==="TVOnTheAir"){

            WrittenContent = "TV On The Air"
        }

        if (WrittenContent==="AllBestSellers"){

            WrittenContent = "All Best Sellers"
        }



        return (

            <div>
                <h1 className="titulos pt-3 pb-5">{Type + "s - " + WrittenContent}</h1>

                <div className={'ml-5'}>


                    {Type==='Movie' &&

                    info.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                             title={item.title} id={item.id} type={"Movie"}/>)
                    }


                    {Type==='Serie' &&

                    info.map((item) => <MiniatureEntertaiment img={item.poster_path} text={item.overview}
                                                                    title={item.name} id={item.id}  type={'Serie'}/>)
                    }

                    {Type==='Book' &&

                    info.map((item) => <MiniatureEntertaiment img={item.items[0].volumeInfo.imageLinks.thumbnail} text={item.items[0].volumeInfo.description}
                                                              title={item.items[0].volumeInfo.title} id={item.items[0].volumeInfo.industryIdentifiers[0].identifier} type={'Book'}/>)
                    }

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

        books:{

            all_bestsellers: state.books.all_bestsellers

        }
    }


};


export default connect(mapStateToProps)(List);
