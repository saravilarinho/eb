import React, {useEffect} from 'react';
import './Styles/Styles.css';
import {connect} from 'react-redux';
import Backdrop from './Components/Backdrop'
import RandomEntertaiment from './Components/RandomEntertaiment'
import {auth} from "./Config/fbConfig";
import {SetCurrentUser} from "./Actions/SetCurrentUser";


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


    return (
        <div>
            <Backdrop/>
            <RandomEntertaiment/>
        </div>
    );
}


const mapDispatchStateToProps = dispatch => ({
    setCurrentUser: (user) => {
        dispatch(SetCurrentUser(user));

    },
});

export default connect(null, mapDispatchStateToProps)(Homepage);
