import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ConfirmPasswordField = ({ password }) => {
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleRepeatPasswordChange = (event) => {
        const newRepeatPassword = event.target.value;
        setRepeatPassword(newRepeatPassword);
        if (newRepeatPassword !== password) {
            setRepeatPasswordError('As senhas não coincidem');
        } else {
            setRepeatPasswordError('');
        }
    };

    return (
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
    );
};

export default ConfirmPasswordField;
