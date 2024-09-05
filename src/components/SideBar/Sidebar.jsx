import React from 'react';
import { Drawer, Typography } from '@mui/material';
import { Box } from '@mui/material';
import LogoSVG from '../Img/logo.svg'
import './Sidebar.css';
import Navigation from './Navigation';

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
