import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import PasswordField from '../../components/password-validations-field/PasswordInput';
import ConfirmPasswordField from '../../components/confirm-password-field/ConfirmPasswordInput';
import LogoSvg from '../../components/Img/logo.svg';
import './Change.css';
import "./../../index.css"

import { changePassword } from '../../services/LoginService';
import { useLocation } from "react-router-dom";


const Change = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromQuery = queryParams.get('email');
        const codeFromQuery = queryParams.get('code');

        if (emailFromQuery) {
            setEmail(emailFromQuery);
        }
        if (codeFromQuery) {
            setCode(codeFromQuery);
        }

    }, [location]);



    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    const handleChangePasswordClick = async () => {
        try {
            const data = { email, password, code };
            const response = await changePassword(data);
            window.open("/");
        } catch (error) {
            console.error("Erro ao fazer requisição:", error);

        }
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
                        <TextField id="outlined-textarea" label={email} placeholder="Endereço de e-mail" disabled />
                        <p className="text-500 text-sm ml-2 mt-1">E-mail não pode ser alterado</p>
                    </FormControl>
                </div>

                <PasswordField onPasswordChange={handlePasswordChange} />

                <ConfirmPasswordField password={password} />

                <div className="flex align-items-center justify-content-center mt-5">
                    <div className="mr-2">
                        <Button className="w-full btn-login" onClick={handleChangePasswordClick} icon="pi pi-envelope" iconPos="left" label="Alterar senha" outlined />
                    </div>
                    <Button icon="pi pi-times" className="p-button-secondary" onClick={() => window.location.href = '/'} tooltip="Cancelar" tooltipOptions={{ position: 'right' }} />
                </div>
            </Card>
        </div>
    );
};

export default Change;
