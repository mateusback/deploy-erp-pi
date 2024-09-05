import React from 'react';
import './Header.css';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import ButtonProfile from './ProfileButton';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <AppBar
            position="fixed"
            className={`topbar ${isSidebarOpen ? 'expanded' : 'collapsed'}`}
        >
            <Toolbar>

                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={toggleSidebar}
                    sx={{ marginRight: '20px', display: { sm: 'block', xs: 'block' }, marginLeft: { sm: '0', xs: '0' } }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    Cardápio
                </Typography>

                <ButtonProfile />
            </Toolbar>
        </AppBar>
    );
};

export default Header;


