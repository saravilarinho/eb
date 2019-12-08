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
import SignUp from './SignUp'
import SignIn from './SignIn'
import List from  './List'
import Books from './Books'
import Select_Individual_Movie from "./Components/Select_Individual_Movie";
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from "./Config/fbConfig";
import {SetCurrentUser} from "./Actions/SetCurrentUser";


function App(props){






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



    return(
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
              <Route path="/Select_Individual_Movie" component={Select_Individual_Movie}/>
              <Route path="/Favourites"/>
              <Route component={Homepage}/>
          </Switch>

          <Footer/>
      </Router>
   )

}

const mapDispatchStateToProps = dispatch => ({
    setCurrentUser: (user) => {
        dispatch(SetCurrentUser(user));

    },
});



export  default connect(null,mapDispatchStateToProps)(App);