import "./Login.css";
import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';

import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { validatePassword } from './../../validations/passwordValidation';

const Login = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
            <div id="field-password" className="field">
                <FormControl required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password" >Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder="Senha deve ter no mínimo 6 caracteres"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        onChange={handlePasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Senha"
                    />
                    <div className="error-container">
                            {passwordError && <small className="p-error">{passwordError}</small>}
                        </div>
                </FormControl>
            </div>

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