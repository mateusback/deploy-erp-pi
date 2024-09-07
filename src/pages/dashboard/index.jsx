import React from 'react';
import { Grid, Paper, Typography, Box, IconButton, createTheme, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InboxIcon from '@mui/icons-material/Inbox';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 960,
            lg: 1280,
            xl: 1600,
        },
    },
});

const Index = () => {
    const data = [
        {
            title: "Ordens",
            value: "152",
            qtde: "24 ",
            descri: " novos pedidos hoje",
            icon: <ShoppingCartIcon sx={{ color: 'blue' }} />,
            bgColor: 'rgba(33, 150, 243, 0.1)',
        },
        {
            title: "Ganhos",
            value: "R$ 2.100",
            qtde: "%52+ ",
            descri: "desde o último mês",
            icon: <LocationOnIcon sx={{ color: 'orange' }} />,
            bgColor: 'rgba(255, 152, 0, 0.1)',
        },
        {
            title: "Clientes",
            value: "6,350",
            qtde: "520 ",
            descri: " novos clientes",
            icon: <InboxIcon sx={{ color: 'black' }} />,
            bgColor: 'rgba(255, 188, 212, 0.1)',
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={2} sx={{ padding: { xs: 2, sm: 3, md: 4 }, borderRadius: 2, minWidth: '175px' }}>
                            <Box display="flex" justifyContent="space-between" mb={2}>
                                <Box>
                                    <Typography variant="body2" sx={{ fontSize: 20 }} color="text.secondary" mb={1}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.primary">
                                        {item.value}
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{
                                        backgroundColor: item.bgColor,
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        borderRadius: '50%',
                                    }}
                                >
                                    <IconButton>
                                        {item.icon}
                                    </IconButton>
                                </Box>
                            </Box>
                            <Typography variant="body" color={"green"}>
                                {item.qtde}
                            </Typography>
                            <Typography variant="body">
                                {item.descri}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
};

export default Index;
