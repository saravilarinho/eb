import React, {useEffect} from 'react';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Footer from './Footer'
import Movies from './Movies';
import Series from "./Series";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndividualEntertaimentPage from './IndividualEntertaimentPage'
import Music from "./Music";
import Search from "./Search"
import SignUp from './SignUp'
import SignIn from './SignIn'
import Favorites from './Favorites'
import List from './List'
import Books from './Books'
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from "./Config/fbConfig";
import {SetCurrentUser} from "./Actions/SetCurrentUser";
import {SetFavourites} from "./Actions/SetFavourites";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function App(props) {

    const GetAndCheckUserFavorites = (user) => {

        const db = firebase.firestore();

        db.collection("favorites").where("id", "==", user.uid)
            .get()
            .then((querySnapshot) => {

                if (querySnapshot.docs.length > 0) {
                    //verifica se existem documentos na base de dados

                    querySnapshot.forEach(function (doc) {
                        let data = doc.data();
                        props.SetFavourites(data.movies, data.series, data.books,doc.id)
                    });
                } else {
                    //se nao existir uma coleção já criada, cria uma:
                    db.collection("favorites").add({
                        id: user.uid,
                        movies: [],
                        series: [],
                        books: []
                    })
                        .then(function (docRef) {
                            //console.log("lista feita");
                        })
                        .catch(function (error) {
                            //console.error("Error adding document: ", error);
                        });
                }

            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });


    };

    useEffect(() => {

        let CheckUserAuth = null;

        CheckUserAuth = auth.onAuthStateChanged(user => {
            if (user) {

                props.setCurrentUser(user);
                GetAndCheckUserFavorites(user);

            }
        });

        return () => {
            CheckUserAuth()
        }

    }, [props.users, props.setCurrentUser]);

    return (
        <Router>
            <Navbar/>
            <Switch>

                <Route path="/Homepage" component={Homepage}/>
                <Route path="/Individual/:type/:identertaiment" component={IndividualEntertaimentPage}/>
                <Route path="/Movies" component={Movies}/>
                <Route path="/Series/:id_entertaiment" component={IndividualEntertaimentPage}/>
                <Route path="/List/:type/:content/:page" component={List}/>
                <Route path="/Series" component={Series}/>
                <Route path="/Books/:isbn" component={IndividualEntertaimentPage}/>
                <Route path="/Books" component={Books}/>
                <Route path="/Music" component={Music}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/Search/:word_search" component={Search}/>
                <Route path="/Favorites" component={Favorites}/>
                <Route component={Homepage}/>
            </Switch>

            <Footer/>
        </Router>
    )

}

const mapStateToProps = (state) => {
    return {user_select: state.users}
};

const mapDispatchStateToProps = dispatch => ({
    SetFavourites: (movies, series, books,id) => {
        dispatch(SetFavourites(movies, series, books,id))
    },
    setCurrentUser: (user) => {
        dispatch(SetCurrentUser(user))
    },

});


export default connect(mapStateToProps, mapDispatchStateToProps)(App);