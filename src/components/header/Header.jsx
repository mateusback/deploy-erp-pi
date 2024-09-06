import React from 'react';
// IMPORT MUI COMPONENTS
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
// IMPORT MUI ICONS
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// IMPORT INTERNAL FILES
import ButtonProfile from './HeaderContent/ProfileButton';
import './Header.css';
import Search from './HeaderContent/Search';
import Notification from './HeaderContent/Notification';

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
                    sx={{ marginRight: '10px', marginLeft: '0px' }}
                >
                    <MenuOpenIcon />
                </IconButton>
                <Search />
                <Notification sx={{ mr: 1500 }} />
                <ButtonProfile sx={{ marginLeft: '150px' }} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;


