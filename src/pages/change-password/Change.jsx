import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import PasswordField from '../../components/password-validations-field/PasswordInput';
import ConfirmPasswordField from '../../components/confirm-password-field/ConfirmPasswordInput';
import LogoSvg from '../../components/Img/logo.svg';
import './Change.css';
import "./../../index.css"


const Change = () => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    return (
        <div className="flex align-items-center justify-content-center mt-5">
            <Card className="shadow-5 border-round md:w-30rem">
                <div className="text-center mb-5">
                    <div className="logo-wrapper">
                        <div className="logo-container mb-3">
                            <img src={LogoSvg} alt="logo" />
                        </div>
                    </div>
                    <div className="text-900 text-3xl font-medium mb-3">Alterar Senha</div>
                    <span className="subTitle">para voltar a acessar sua conta.</span>
                </div>
                <div id="field-mail" className="field">
                    <FormControl fullWidth>
                        <TextField id="outlined-textarea" label="emailTeste@gmail.com" placeholder="Endereço de e-mail" disabled />
                        <p className="text-500 text-sm ml-2 mt-1">E-mail não pode ser alterado</p>
                    </FormControl>
                </div>

                <PasswordField onPasswordChange={handlePasswordChange} />

                <ConfirmPasswordField password={password} />

                <div className="flex align-items-center justify-content-center mt-5">
                    <div className="mr-2">
                        <Button className="w-full btn-login" icon="pi pi-envelope" iconPos="left" label="Alterar senha" outlined />
                    </div>
                    <Button icon="pi pi-times" className="p-button-secondary" onClick={() => window.location.href = '/'} tooltip="Cancelar" tooltipOptions={{ position: 'right' }} />
                </div>
            </Card>
        </div>
    );
};

export default Change;
