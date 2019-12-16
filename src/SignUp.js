import React, {useState} from 'react';
import './Styles/Styles.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";
import {auth} from './Config/fbConfig';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const SignUp = () => {


    let db = firebase.firestore();


    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password === passwordConfirmation) {

            auth
                .createUserWithEmailAndPassword(email, password)
                .then(user => {

                    console.log('utilizador criado');

                    db.collection("favorites").add({
                          id: user.user.uid,
                         movies:[],
                         series:[],
                         books:[]
                      })
                          .then(function (){
                              console.log("ja fez sign up")
                              }
                          )
                          .catch(function(error) {
                              console.error("Error adding document: ", error);
                          });



                })
                .catch(err => console.error(err))

        } else {
            console.log("password does not match")
        }



    };




    return (
        <div className={'divform pr-5 pl-5'}>


            <section>
                <Form className={'formulario pr-5 pl-5'}>
                    <FormGroup className={'col-md-4 pt-4'}>
                        <Label for="exampleEmail">E-mail</Label>
                        <Input type="email" name="email" id="exampleEmail" value={email}
                               onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
                    </FormGroup>

                    <FormGroup className={'col-md-4 pt-4'}>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" value={password}
                               onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                    </FormGroup>

                    <FormGroup className={'col-md-4 pt-4'}>
                        <Label for="examplePassword">Password Confirmation</Label>
                        <Input type="password" name="password" id="examplePassword" value={passwordConfirmation}
                               onChange={e => setPasswordConfirmation(e.target.value)}
                               placeholder="Password Confirmation"/>
                    </FormGroup>

                    <Button className={'col-md-2 mt-4 mb-4 botao pt-1'} onClick={handleSignUp}>SIGN UP</Button>

                </Form>

                <div className={"aindanao  mt-5  pr-5 pl-5"}>
                    <p> Already have an account?
                        <Link to={"/SignIn"} className={'registate '}>Sign In!</Link>
                    </p>
                </div>

            </section>



        </div>

    )

};


export default SignUp;
