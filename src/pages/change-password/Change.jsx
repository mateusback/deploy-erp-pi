import './Change.css';

import { React } from "react";
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const Change = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const validate = (password) => {
        const size = 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < size) {
            return 'A senha deve ter no mínimo 6 caracteres.';
        }
        if (!hasUpperCase) {
            return 'A senha deve conter pelo menos 1 letra maiúscula.';
        }
        if (!hasLowerCase) {
            return 'A senha deve conter pelo menos 1 letra minúscula.';
        }
        if (!hasNumber) {
            return 'A senha deve conter pelo menos 1 número.';
        }
        if (!hasSpecialChar) {
            return 'A senha deve conter pelo menos 1 caractere especial.';
        }

        return '';
    };


    const handlePasswordChange = (event) => {
        // Pega a nova senha
        const newPassword = event.target.value;
        // Atualiza com a nova senha
        setPassword(newPassword);
        // Valida a senha novamente
        const error = validate(newPassword);
        // Atualiza o erro
        setPasswordError(error);
    };

    const handleRepeatPasswordChange = (event) => {
        const newRepeatPassword = event.target.value;
        setRepeatPassword(newRepeatPassword);
        handlePasswordEqual(password, newRepeatPassword);
    };

    const handlePasswordEqual = (password, repeatPassword) => {
        if (password !== repeatPassword) {
            setRepeatPasswordError('As senhas não são iguais.');
        } else {
            setRepeatPasswordError('');
        }
    };

    return (
        <div className="flex align-items-center justify-content-center mt-5">
            <Card className="shadow-5 border-round md:w-30rem">
                <div className="text-center mb-5">
                    <img src="" alt="logo" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Alterar Senha</div>
                    <span className="subTitle">para voltar a acessar sua conta.</span>
                </div>
                <div id="field-mail" className="field">
                    <FormControl fullWidth>
                        <TextField id="outlined-textarea" label="emailTeste@gmail.com" placeholder="Endereço de e-mail" disabled />
                        <text className="text-500 text-sm ml-2 mt-1">E-mail não pode ser alterado</text>
                    </FormControl>
                </div>
                <div id="field-code" className="field">
                    <FormControl fullWidth>
                        <TextField id="outlined-textarea"
                            label="Código"
                            placeholder="O código deve possuir 4 chacteres"
                            required
                        />
                    </FormControl>
                </div>
                <div id="field-password" className="field">
                    <FormControl required fullWidth error={!!passwordError}>
                        <InputLabel htmlFor="outlined-adornment-password">Nova Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            placeholder="Senha deve ter no mínimo 6 caracteres"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
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
                            label="Nova Senha"
                        />
                        {passwordError && <p style={{ color: 'red', fontSize: 13 }}>{passwordError}</p>}
                    </FormControl>
                </div>
                <div id="field-repeat-password" className="field">
                    <FormControl required fullWidth>
                        <InputLabel htmlFor="outlined-adornment-repeat-password">Confirmar a Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-repeat-password"
                            placeholder="Repita a senha"

                            type={showRepeatPassword ? 'text' : 'password'}
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="visibilidade do campo de repetir senha"
                                        onClick={handleClickShowRepeatPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirmar a Senha"
                        />
                        {repeatPasswordError && <p style={{ color: 'red', fontSize: 13 }}>{repeatPasswordError}</p>}
                    </FormControl>
                </div>

                <div className="flex align-items-center justify-content-center mt-5">
                    <div className="mr-2">
                        <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Alterar senha" />
                    </div>
                    <Button icon="pi pi-times" severity="secondary" onClick={() => window.location.href = '/'} tooltip="Cancelar" tooltipOptions={{ position: 'right' }} />
                </div>
            </Card>
        </div>
    );
}

export default Change;