import React from 'react';
import './Styles/Styles.css';
import IndividualEntertaiment from './Components/IndividualEntertaiment'
import {connect} from 'react-redux';
import {FetchAPI} from "./Actions/FetchAction";
import {Redirect} from "react-router";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {SetFavourites} from "./Actions/SetFavourites";


class IndividualEntertaimentPage extends React.Component {


    componentDidMount() {


        if (this.props.match.params.type === 'Movies') {

            this.props.FetchAPI("https://api.themoviedb.org/3/movie/" + this.props.match.params.identertaiment + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US", 'individual', 'individual');


        }

        if (this.props.match.params.type === 'Series') {

            this.props.FetchAPI(" https://api.themoviedb.org/3/tv/" + this.props.match.params.identertaiment + "?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US", 'individual', 'individual');

        }


        if (this.props.match.params.type === 'Books') {

            this.props.FetchAPI("  https://www.googleapis.com/books/v1/volumes?q=isbn:" + this.props.match.params.identertaiment, 'individual', 'individual')

        } else {
            return <Redirect to='/Homepage'/>

        }
    }


    componentWillUnmount() {
        this.props.IndividualBackTo0();
    }


    GetLikeUnlikeInfo = () => {


        if (this.props.user !== null && this.props.user.favorites !== []) {


            let x = [];
            let bol = false;

            console.log(this.props.user);

            if (this.props.match.params.type === 'Movies') {

                x = this.props.user.favorites.movies

            }

            if (this.props.match.params.type === 'Series') {

                x = this.props.user.favorites.series

            }


            if (this.props.match.params.type === 'Books') {

                x = this.props.user.favorites.books

            }


            x.forEach(x => {

                if (parseInt(x) === parseInt(this.props.match.params.identertaiment)) {

                    bol = true

                }

            });

            return bol

        }

    };


    Loading = () => {

        return <section className={'row justify-content-center my-5'}>

            <div className="spinner-border text-warning loading d-inline-block" id={'loading'}
                 role="status">
                <span className="sr-only">Loading...</span>
            </div>

        </section>

    };


    AddandDeleteHeart = () => {

        console.log('entrei');

        const db = firebase.firestore();

        let bol = this.GetLikeUnlikeInfo();

        if (this.props.user.documentid !== '') {

            let updatedocument = db.collection("favorites").doc(this.props.user.documentid);

            if (bol === true) {


                if (this.props.match.params.type === 'Books') {

                    let newboos = [];

                    this.props.user.favorites.books.map(item => {
                        if (parseInt(item) !== parseInt(this.props.match.params.identertaiment)) {

                            newboos.push('"'+item+'"')
                        }
                    });

                    return updatedocument.update({

                        books: newboos

                    })
                }

                if (this.props.match.params.type === 'Series') {

                    let newseries = [];

                    this.props.user.favorites.series.map(item => {
                        if (parseInt(item) !== parseInt(this.props.match.params.identertaiment)) {

                            newseries.push(item)
                        }
                    });

                    return updatedocument.update({

                        series: newseries

                    })
                }

                if (this.props.match.params.type === 'Movies') {

                    let newmovies = [];

                    this.props.user.favorites.movies.map(item => {
                        if (parseInt(item) !== parseInt(this.props.match.params.identertaiment)) {

                            newmovies.push(item)
                        }
                    });

                    return updatedocument.update({

                        movies: newmovies

                    })

                }
            } else {

                if (this.props.match.params.type === 'Books') {

                    let newbooks = this.props.user.favorites.books;

                    newbooks.push(parseInt(this.props.match.params.identertaiment));

                    return updatedocument.update({

                        books: newbooks

                    })
                }

                if (this.props.match.params.type === 'Series') {

                    console.log('jgteriughew');

                    let newseries = this.props.user.favorites.series;

                    newseries.push(parseInt(this.props.match.params.identertaiment));

                    return updatedocument.update({

                        series: newseries

                    })

                }

                if (this.props.match.params.type === 'Movies') {

                    let newmovies = this.props.user.favorites.movies;

                    newmovies.push(parseInt(this.props.match.params.identertaiment));

                    return updatedocument.update({

                        movies: newmovies

                    })

                }


            }


        }
    };

    GetAndCheckUserFavorites = () => {

        const db = firebase.firestore();


        db.collection("favorites").where("id", "==", this.props.user.uid)
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


    render() {

        return (


            <section>


                {this.props.individual_entertaiment !== false ?


                    <div className={'pads'}>

                        <IndividualEntertaiment type={this.props.match.params.type}
                                                info={this.props.individual_entertaiment}
                                                heart={this.GetLikeUnlikeInfo()} likeandunlike={this.AddandDeleteHeart}
                                                check={this.GetAndCheckUserFavorites} user={this.props.user.login}/>
                    </div>
                    : this.Loading()
                }
            </section>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        individual_entertaiment: state.individual_entertaiment,
        user: state.users

    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content)),
        IndividualBackTo0: () => {
            dispatch({type: 'INDIVIDUAL_BACK_0'})
        },
        SetFavourites: (movies, series, books, id) => {
            dispatch(SetFavourites(movies, series, books, id))
        }
    }

};

export default connect(mapStateToProps, mapDispatchtoProps)(IndividualEntertaimentPage);
