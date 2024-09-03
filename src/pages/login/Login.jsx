import "./Login.css";
import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { validatePassword } from './../../validations/passwordValidation';
import SimplePasswordField from "../../components/password-field/SimplePasswordField";

const Login = () => {

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = () => {
        const errorMessage = validatePassword(password);
        console.log(errorMessage);
        setPasswordError(errorMessage);
        const isValid = errorMessage === "";

        if (isValid) {
            setIsPasswordValid(true);
            window.open("/");
        } else {
            setIsPasswordValid(false);
        }
    };
    
    return (
        <Card className="shadow-5 border-round md:w-30rem">
            <div className="text-center mb-5">
                <img src="" alt="logo" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Entrar</div>
            </div>
            <div id="field-name" className="field">
                <FormControl fullWidth>
                    <TextField onChange={handlePasswordChange} id="outlined-textarea" name="email" label="E-mail | Usuário" placeholder="Endereço de e-mail ou nome de usuário" required />
                </FormControl>
            </div>

            <SimplePasswordField/>
        
            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                </div>
                <Link className="font-medium ml-2 no-underline text-blue-500 text-right cursor-pointer" to="/recover-password" target="_blank">Esqueceu a senha?</Link>
            </div>

            <div className="mt-5 mb-5">
                <div className="col">
                    <Button onClick={handleLoginClick} className="w-full btn-login" label="Continuar" icon="pi pi-user" iconPos="left" severity="secondary" outlined />
                </div>
            </div>
        </Card>
    );
}

export default Login;