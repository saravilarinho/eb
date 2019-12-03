import React from 'react';
import './Styles/Styles.css'
import MiniatureEntertaiment from "./Components/MiniatureEntertaiment";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const Type = this.props.match.params.type;
        const Content = this.props.match.params.content;
        let info = "";

        console.log(Type + Content);

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

        let WrittenContent = Content;

        if (WrittenContent==="TopRated"){

            WrittenContent = "Top Rated"
        }

        if (WrittenContent==="TVOnTheAir"){

            WrittenContent = "TV On The Air"
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
    }


};


export default connect(mapStateToProps)(List);
