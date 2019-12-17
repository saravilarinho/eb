import React, {useEffect} from 'react';
import './Styles/Styles.css';
import {connect} from 'react-redux';
import Backdrop from './Components/Backdrop'
import RandomEntertaiment from './Components/RandomEntertaiment'
import {auth} from "./Config/fbConfig";
import {SetCurrentUser} from "./Actions/SetCurrentUser";
import {FetchAPI} from "./Actions/FetchAction";

const randomWords = require('random-words');
const books = require('google-books-catalogue-search');



function Homepage(props) {


    useEffect(() => {

        let unsuscribeFromAuth = null;

        unsuscribeFromAuth = auth.onAuthStateChanged(user => {

            if (user) {
                //se o utilizador existir faz o set do currentUser
                props.setCurrentUser(user);

            }
        });


        return () => {
            unsuscribeFromAuth()
        }


    }, [props.users, props.setCurrentUser, props.clearCurrentUser]);


    const CallbackAPI = () => {



        function getRandomIntInclusive(min = 1, max = 3) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let randoment = getRandomIntInclusive();
        let word = randomWords();

        if (randoment === 1) {

            props.FetchAPI("https://api.themoviedb.org/3/search/movie?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "%&page=1&include_adult=false", 'random', 'movies');


        }

        if (randoment === 2) {

            props.FetchAPI("https://api.themoviedb.org/3/search/tv?api_key=9af2cb9433dbe1e985ec3f026427fe3d&language=en-US&query=" + word + "&page=1", 'random', 'series');


        }

        if (randoment === 3) {

            books.search(word, function (error, results) {
                if (!error) {

                   let ranenter = Math.floor(Math.random() * (results.length-1 - 0 + 1)) + 0;
                   props.BookRandom(results[ranenter],"random","books")

                }
            });

        }
    };


    return (
        <div>
            <Backdrop/>
            <RandomEntertaiment state={props.random.ony} content={props.random.random_content} type={props.random.type} onclickfunction={CallbackAPI}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {random: state.random}
};

const mapDispatchStateToProps = dispatch => ({
    setCurrentUser: (user) => {dispatch(SetCurrentUser(user));},
    FetchAPI: (API, content, type_content) => dispatch(FetchAPI(API, content, type_content)),
    BookRandom: (result,content,type_contetn) => {dispatch({type: 'FETCH_API',content: content, type_content: type_contetn,result:result})}
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Homepage);
