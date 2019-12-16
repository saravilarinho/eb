import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles/Styles.css';
import img from "../Images/film.jpg";
import eyeicon from '../Images/plus-solid.svg'
import hearticon from '../Images/heart_unfill.svg'
import hearticon_1 from '../Images/heart_fill.svg';
import {Link} from 'react-router-dom'
import poster_default from  '../Images/dafaul_poster.png'
import {connect} from 'react-redux';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {SetFavourites} from "../Actions/SetFavourites";


const MiniatureEntertaiment = (props) => {

    let path = props.img;

    const readMore = (str, max = 40) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';

        return array.slice(0, max).join(' ') + ellipsis;
    };


    if (props.type ==='Movie' || props.type === 'Serie' || props.type === 'Favourite_Movie') {
        path = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + props.img;
    }
    const GetLikeUnlikeInfo = (id, type) => {


        if (props.user !== null && props.user.favorites !== []) {


            let x = [];
            let bol = hearticon;

            if (type === 'Movie') {

                x = props.user.favorites.movies

            }

            if (type === 'Serie') {

                x = props.user.favorites.series

            }


            if (type === 'Book') {

                x = props.user.favorites.books

            }


            x.forEach(x => {

                if (parseInt(x) === parseInt(id)) {

                    bol = hearticon_1;

                }

            });

            return bol

        }

    };

    const AddandDeleteHeart = (id, type) => {



        const db = firebase.firestore();

        let bol = GetLikeUnlikeInfo(id,type);


        if (props.user.documentid !== '') {

            let updatedocument = db.collection("favorites").doc(props.user.documentid);

            if (bol ===hearticon_1 ) {


                if (type === 'Book') {

                    let newboos = [];

                   props.user.favorites.books.map(item => {
                        if (parseInt(item) !== parseInt(id)) {

                            newboos.push(parseInt(item))
                        }
                    });

                    return updatedocument.update({

                        books: newboos

                    })
                }

                if (type === 'Serie') {

                    let newseries = [];

                    props.user.favorites.series.map(item => {
                        if (parseInt(item) !== parseInt(id)) {

                            newseries.push(item)
                        }
                    });

                    return updatedocument.update({

                        series: newseries

                    })
                }

                if (type === 'Movie') {

                    let newmovies = [];

                   props.user.favorites.movies.map(item => {
                        if (parseInt(item) !== parseInt(id)) {

                            newmovies.push(item)
                        }
                    });

                    return updatedocument.update({

                        movies: newmovies

                    })

                }
            } else {

                if (type === 'Book') {

                    let newbooks = props.user.favorites.books;

                    newbooks.push(id);

                    return updatedocument.update({

                        books: newbooks

                    })
                }

                if (type === 'Serie') {

                    let newseries = props.user.favorites.series;

                    newseries.push(parseInt(id));

                    return updatedocument.update({

                        series: newseries

                    })

                }

                if (type === 'Movie') {

                    let newmovies = props.user.favorites.movies;

                    newmovies.push(parseInt(id));

                    return updatedocument.update({

                        movies: newmovies

                    })

                }


            }

        }};

    return (


        <section className={'d-inline mb-5 w-100'}>
            <div className={'col-10 col-md-5 col-lg-3 listentertaiment mb-5'}>
                <section className={'col-11 h-100'}>
                    <img src={props.img === null ? poster_default : path} className={'w-100 d-block img-back'} />
                    <div className={'position-absolute above p-3 w-100'}>
                        <h1 className={'text-wrap'}> {props.title} </h1>
                        <p className={' text-adapt text-wrap'}>{props.text ? readMore(props.text): console.log('nok') }
                        </p>
                        <div className={'row justify-content-between likeandview w-100 '}>
                            <Link to={'/Individual/'+props.type+'s/' + props.id} className={"col-4 col-lg-3 d-flex align-items-center"}>
                                <img className={'img-fluid '} src={eyeicon}/>
                            </Link>
                            <img className={"col-5 col-lg-4 img-fluid d-flex align-items-center"} src={GetLikeUnlikeInfo(props.id, props.type)} onClick={()=>{
                                AddandDeleteHeart(props.id, props.type);
                               props.func();
                            }}/>
                        </div>
                    </div>
                </section>
                <section className={'col-12 text-center seemore'}>
                    <Link to={'/Individual/'+props.type+'s/' + props.id}>

                    <button className={'buttonseemore'}>SEE MORE</button>
                    </Link>

                </section>
            </div>
        </section>

    );
};

const mapStateToProps = (state) => {
    return {
        user: state.users

    }
};



export default connect(mapStateToProps)(MiniatureEntertaiment);
