import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';

const IndexDashboard = ({ isOpen }) => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                transition: 'margin 0.3s ease-in-out',
                marginLeft: isOpen ? '10px' : '0px',
                marginTop: '10px', // Espaçamento para a Topbar
            }}
        >
            <Toolbar />
            <Typography paragraph>
                Aqui vai o conteúdo principal do painel de controle.
            </Typography>
            {/* Adicione mais conteúdo conforme necessário */}
        </Box>
    );
}

export default IndexDashboard;