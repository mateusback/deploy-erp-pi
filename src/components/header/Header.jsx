import React from 'react';
import './Header.css';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Notifications, Menu } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';

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
                    sx={{ marginRight: '16px' }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    Cardápio
                </Typography>


                <IconButton color="inherit">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </IconButton>
                <IconButton color="inherit">
                    <Notifications sx={{ fontSize: 20 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
