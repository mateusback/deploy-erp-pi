import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Notifications, AccountCircle, Menu } from '@mui/icons-material';

const Header = ({ toggleSidebar }) => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={toggleSidebar}
                    sx={{ marginRight: '16px' }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    Painel de Controle
                </Typography>
                <IconButton color="inherit">
                    <Notifications />
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
