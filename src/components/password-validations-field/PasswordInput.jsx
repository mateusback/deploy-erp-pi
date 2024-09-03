import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = ({ id = 'outlined-adornment-password', label = 'Nova Senha', placeholder = 'Senha deve ter no mínimo 6 caracteres', onPasswordChange }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validateInput, setValidateInput] = useState({
        case: false,
        number: false,
        length: false,
        specialChar: false
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validatePassword = (password) => {
        const hasUpperCase = /^(?=.*[A-Z]).+$/;
        const hasLowerCase = /^(?=.*[a-z]).+$/;
        const hasNumber = /^(?=.*[0-9]).+$/;
        const hasSpecialChar = /^(?=.*[!@#$%^&*(),.?":{}|<>])/;
        const length = password.length >= 6;

        setValidateInput({
            case: hasUpperCase.test(password) && hasLowerCase.test(password),
            number: hasNumber.test(password),
            specialChar: hasSpecialChar.test(password),
            length
        });
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
        if (onPasswordChange) {
            onPasswordChange(newPassword);
        }
    };

    return (
        <div id="field-password" className="field">
            <FormControl required fullWidth>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <OutlinedInput
                    id={id}
                    placeholder={placeholder}
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
                    label={label}
                />
                <div className="password-feedback">
                    <p>A senha deve conter:</p>
                    <p style={{ color: validateInput.case ? 'green' : 'red' }}>
                        {validateInput.case ? '✔' : '✖'} Deve conter letras maiúsculas e minúsculas
                    </p>
                    <p style={{ color: validateInput.number ? 'green' : 'red' }}>
                        {validateInput.number ? '✔' : '✖'} Deve conter pelo menos um número
                    </p>
                    <p style={{ color: validateInput.specialChar ? 'green' : 'red' }}>
                        {validateInput.specialChar ? '✔' : '✖'} Deve conter pelo menos um caractere especial
                    </p>
                    <p style={{ color: validateInput.length ? 'green' : 'red' }}>
                        {validateInput.length ? '✔' : '✖'} Deve ter pelo menos 6 caracteres
                    </p>
                </div>
            </FormControl>
        </div>
    );
};

export default PasswordField;
