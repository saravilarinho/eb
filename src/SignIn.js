import React from 'react';
import './Styles/Styles.css';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";

function SignIn () {
    return(



            <div className={'divform'}>

                <Form className={'formulario'}>
                    <FormGroup className={'col-md-4 pt-4'} >
                        <Label for="exampleUsername">Username</Label>
                        <Input type="username" name="username" id="exampleUsername" placeholder=" Username" />
                    </FormGroup>

                    <FormGroup className={'col-md-4 pt-4'} >
                        <Label for="exampleEmail">E-mail</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder=" E-mail" />
                    </FormGroup>

                    <FormGroup  className={'col-md-4 pt-4'}>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder=" Password" />
                    </FormGroup>

                    <FormGroup className={'col-md-4 pt-4'}>
                        <Label for="exampleFile">Profile Picture</Label>
                        <Input type="file" name="file" id="exampleFile"/>
                    </FormGroup>

                    <Button className={'col-md-2 mt-4 botao pt-1'}>SIGN UP</Button>

                </Form>

                <div className={"aindanao mt-4"}>
                    <p> Already have an account?
                        <Link to={"/Login"} className={'registate'}>Login!</Link>
                    </p>
                </div>

            </div>
    )
}

export default SignIn;
