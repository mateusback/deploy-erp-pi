import React from 'react';
import clsx from 'clsx';
import { Drawer, Typography, Box } from '@mui/material';
import LogoSVG from '../Img/logo.svg';
import Navigation from './DrawerContent/Navigation';

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
    return (
        <Drawer
            className={clsx('Drawer', { 'closed': !isOpen })}
            variant={isMobile ? 'temporary' : 'persistent'}
            open={isOpen}
            onClose={toggleSidebar}
            ModalProps={{ keepMounted: true }}
        >
            <Box className={clsx('logo-container', { 'closed': !isOpen })}>
                <img className={clsx('logo', { 'closed': !isOpen })} src={LogoSVG} alt="Logo" />
                {isOpen && (
                    <Typography className="title" variant="h6">
                        snacktime
                    </Typography>
                )}
            </Box>
            <Navigation isOpen={isOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
        </Drawer>
    );
};

export default Sidebar;
