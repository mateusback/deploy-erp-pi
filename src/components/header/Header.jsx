import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Header = ({ toggleSidebar, isOpen }) => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="toggle sidebar"
                    onClick={toggleSidebar}
                    edge="start"
                    sx={{ marginRight: 2 }}
                >
                    {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Painel de Controle
                </Typography>
            </Toolbar>
        </AppBar>
        
    );
};

export default Header;
