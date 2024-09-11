import React from 'react';
// IMPORT MUI COMPONENTS
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
// IMPORT INTERNAL FILES
import './Sidebar.css';
import LogoSVG from '../Img/logo.svg'
import Navigation from './DrawerContent/Navigation';

const Sidebar = ({ isOpen }) => {
    return (
        <Drawer
            className={`Drawer ${isOpen ? '' : 'closed'}`}
            variant="permanent"
        >
            <Box
                className={`logo-container ${isOpen ? '' : 'closed'}`}
            >
                <img className={`logo ${isOpen ? '' : 'closed'}`} src={LogoSVG} alt="Logo" />
                {isOpen && (
                    <Typography className='title' variant="h6">
                        snacktime
                    </Typography>
                )}
            </Box>
            <Navigation isOpen={isOpen} />
        </Drawer >
    );
}

export default Sidebar;
