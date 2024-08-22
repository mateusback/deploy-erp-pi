import "./Login.css";
import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Login = () => {

    const [checked, setChecked] = React.useState(false);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value })
    }

    const login = () => {

        if (user.email === "teste@gmail.com" && user.password === "123456") {
            let token = "token do backend"
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            navigate("/");
        } else {
            alert('usuário ou senha incorretos');
        }

    }

    return (
        <Card className="shadow-5 border-round md:w-30rem">
            <div className="text-center mb-5">
                <img src="" alt="logo" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Entrar</div>
                <span className="">para continuar com sua conta Leilão</span>
            </div>
            <div id="field-name" className="field">
                <FormControl fullWidth>
                    <TextField onChange={handleChange} id="outlined-textarea" name="email" label="E-mail | Usuário" placeholder="Endereço de e-mail ou nome de usuário" required />
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
                        onChange={handleChange}
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
                </FormControl>
            </div>

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                    <label htmlFor="rememberme">Lembrar de mim</label>
                </div>
                <Link className="font-medium ml-2 no-underline text-blue-500 text-right cursor-pointer" to="/recover-password" target="_blank">Esqueceu a senha?</Link>
            </div>

            <div className="mt-5 mb-5">
                <div className="col">
                    <Button onClick={login} className="w-full btn-login" label="Continuar" icon="pi pi-user" iconPos="left" severity="secondary" outlined />
                </div>
            </div>

            <Divider>
                <Chip label="Ou" size="small" />
            </Divider>

            <div className="text-center mt-4">
                <span className="text-600 font-medium line-height-3">Não tem uma conta?
                    <Link className="font-medium ml-2 no-underline text-blue-500 text-right" to="/registration" target="_blank">Cadastre-se</Link>
                </span>
                <Button className="w-full p-button-raised p-button-warning mt-5" label="Entrar com Google" icon="pi pi-google" iconPos="left" />
            </div>
        </Card>
    );
}

export default Login;