import React from 'react';
import './Styles.css';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";



function Registo () {
    return(
        <div>

            <Form className={'formulario'}>
                <FormGroup className={'col-md-4'} >
                    <Label for="exampleEmail">E-mail</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>

                <FormGroup  className={'col-md-4'}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>

                <FormGroup className={'col-md-4'}>
                    <Label for="exampleFile">Profile Picture</Label>
                    <Input type="file" name="file" id="exampleFile" />

                </FormGroup>
                <Button className={'col-md-2'}>Submit</Button>

            </Form>







        </div>





    )


}






export default Registo;
