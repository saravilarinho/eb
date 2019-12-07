import React, {useEffect, useState} from 'react';
import './Styles/Styles.css';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {auth} from './Config/fbConfig';
import {SetCurrentUser} from "./Actions/SetCurrentUser";
import Nav from "./Navbar";

const SignIn = (props) => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    const handleSignIn = (e) => {

        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(user => console.log(user))
            .catch(err => console.error(err));


    };

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


        <div className={'divform'}>


            {props.users.login === false &&

            <section>
                <Form className={'formulario'}>
                    {/*<FormGroup className={'col-md-4 pt-4'} >
                        <Label for="exampleUsername">Username</Label>
                        <Input type="username" name="username" id="exampleUsername" placeholder=" Username" />
                    </FormGroup>*/}

                    <FormGroup className={'col-md-4 pt-4'}>
                        <Label for="exampleEmail">E-mail</Label>
                        <Input type="email" name="email" id="exampleEmail" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} placeholder="E-mail"/>
                    </FormGroup>

                    <FormGroup className={'col-md-4 pt-4'}>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} placeholder="Password"/>
                    </FormGroup>

                    {/*<FormGroup className={'col-md-4 pt-4'}>
                        <Label for="exampleFile">Profile Picture</Label>
                        <Input type="file" name="file" id="exampleFile"/>
                    </FormGroup>*/}

                    <Button className={'col-md-2 mt-4 botao pt-1'} onClick={handleSignIn}>SIGN IN</Button>

                </Form>

                <div className={"aindanao mt-4"}>
                    <p> Don't have an account?
                        <Link to={"/SignUp"} className={'registate'}>Sign Up!</Link>
                    </p>
                </div>
            </section>
            }

            {props.users.login !== false &&

                <Redirect to={'./Homepage'}/>
                
            }

                </div>
    )
};


const mapStateToProps = (state) => {
    return {users: state.users}
};

const mapDispatchStateToProps = dispatch => ({
    setCurrentUser: (user) => {
        dispatch(SetCurrentUser(user));

    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(SignIn);
