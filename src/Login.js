import React from 'react';
import './Styles.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom";


function Login () {
    return(
        <div className={'divform'}>

            <Form className={'formulario'}>
                <FormGroup className={'col-md-4 pt-4'} >
                    <Label for="exampleEmail">E-mail</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder=" E-mail" />
                </FormGroup>

                <FormGroup  className={'col-md-4 pt-4'}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder=" Password" />
                </FormGroup>

                <Button className={'col-md-2 mt-4 botao pt-1'}>LOGIN</Button>

            </Form>

            <div className={"aindanao  mt-4 "}>
                <p> Don't have an account?
                    <Link to={"/Registo"} className={'registate '}>Sign Up!</Link>
                </p>
            </div>

        </div>

    )

}



export default Login;
