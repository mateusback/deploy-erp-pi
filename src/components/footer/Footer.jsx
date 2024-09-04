import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';

const Footer = ({ isSidebarOpen }) => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 3,
                textAlign: 'center',
                marginLeft: isSidebarOpen ? '240px' : '60px',
                width: isSidebarOpen ? 'calc(100% - 240px)' : 'calc(100% - 60px)',
                transition: 'margin-left 0.3s, width 0.3s',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    The Rapazes
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

export default Footer;