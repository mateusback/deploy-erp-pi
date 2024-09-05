import React from 'react';
// IMPORT MUI COMPONENTS
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
// IMPORT MUI ICONS
import { Menu } from '@mui/icons-material';
// IMPORT INTERNAL FILES
import ButtonProfile from './HeaderContent/ProfileButton';
import './Header.css';
import Search from './HeaderContent/Search';

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

                <Search />
                <ButtonProfile />

            </Toolbar>
        </AppBar>
    );
};

export default Header;


