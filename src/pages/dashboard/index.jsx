import style from './Index.module.css'
import React from 'react';
import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement } from 'chart.js';


Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement);

const barData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
        {
            label: 'Atual',
            backgroundColor: '#3f51b5',
            data: [500, 700, 1000, 800, 1200, 1300, 1100, 950, 1150, 1450, 1200, 1300],
        },
        {
            label: 'Mês anterior',
            backgroundColor: '#e0e0e0',
            data: [400, 650, 800, 750, 900, 1100, 950, 850, 1000, 1200, 950, 1100],
        },
    ],
};

const barOptions = {
    indexAxis: 'x',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
}

const doughnutData = {
    labels: ['Tarde', 'Noite', 'Manhã'],
    datasets: [
        {
            data: [40, 32, 28],
            backgroundColor: ['#5C6BC0', '#7986CB', '#9FA8DA'],
            hoverBackgroundColor: ['#3F51B5', '#5C6BC0', '#7986CB'],
            borderWidth: 2,
            cutout: '70%',
        },
    ],
};

const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
};

const lineData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
        {
            label: 'Atual',
            backgroundColor: '#3f51b5',
            borderColor: '#3f51b5',
            data: [500, 600, 800, 1000, 1200, 1500],
            fill: false,
        },
        {
            label: 'Mês anterior',
            backgroundColor: '#e0e0e0',
            borderColor: '#e0e0e0',
            data: [600, 700, 750, 850, 900, 950],
            fill: false,
        },
    ],
};

const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

const clients = [
    { name: 'Joao', amount: 'R$ 1.500,00' },
    { name: 'Gustavo', amount: 'R$ 1.000,00' },
    { name: 'Mateus', amount: 'R$ 997,00' },
    { name: 'Daniel', amount: 'R$ 750,00' },
];

const products = [
    { name: 'Tábua de Frios', amount: 'R$ 9.000,00' },
    { name: 'Bolo prestígio', amount: 'R$ 3.000,00' },
    { name: 'Torta de palmito', amount: 'R$ 450,00' },
    { name: 'Bolinho de Aipim', amount: 'R$ 300,00' },
];

const commonBoxStyles = { p: 2, height: '100%' };

const Dashboard = () => {
    return (
        <Box sx={{ p: 1 }} >
            <Grid spacing={4}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={commonBoxStyles} className={style.borderTableBottomMobile}>
                            <Box className={style.containerHeaderCharts}>
                                <Box>
                                    <Typography className={style.chartsTitles}>Vendas</Typography>
                                    <Typography variant="h6"><strong>R$ 9.999,99</strong></Typography>
                                </Box>
                                <Button variant="outlined" size="small">Detalhes</Button>
                            </Box>
                            <Typography className={style.captionSells}> Vendas 1-12 Ago, 2024 </Typography>
                            <Box sx={{ height: '250px', mt: 2 }}>
                                <Bar data={barData} options={barOptions} />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2, borderLeft: '1px solid #e0e0e0', height: "100%" }} className={style.borderTableBottomMobile}>
                            <Box className={style.containerHeaderCharts}>
                                <Box>
                                    <Typography className={style.chartsTitles}>Períodos Agendados</Typography>
                                    <Typography className={style.captionCharts}>Agenda 1-12 Ago, 2024</Typography>
                                </Box>

                                <Button variant="outlined" size="small">Detalhes</Button>
                            </Box>

                            <Box sx={{ height: '250px', mt: 2 }}>
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                            </Box>

                        </Box>
                    </Grid>
                </Grid>


                <Grid container sx={{ width: '100%' }} className={style.commonBoxTable}>
                    <Grid item xs={12} md={4} >
                        <Box sx={commonBoxStyles} className={style.borderTableBottomMobile}>
                            <Typography className={style.chartsTitles}>Clientes que mais compram</Typography>
                            <Typography className={style.captionCharts}>
                                Vendas 1-12 Ago, 2024
                            </Typography>
                            <List>
                                {clients.map((client, index) => (
                                    <ListItem key={index} className={style.listItemTable}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: '#f0f0f0' }} />
                                            </ListItemAvatar>
                                            <ListItemText primary={client.name} />
                                        </Box>
                                        <Typography>{client.amount}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box className={style.borderTableBottomMobile}
                            sx={{ p: 2, borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }}>
                            <Typography className={style.chartsTitles}>Produtos mais vendidos</Typography>
                            <Typography className={style.captionCharts}>
                                Vendas 1-12 Ago, 2024
                            </Typography>
                            <List>
                                {products.map((product, index) => (
                                    <ListItem key={index} className={style.listItemTable}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: '#f0f0f0' }} />
                                            </ListItemAvatar>
                                            <ListItemText primary={product.name} />
                                        </Box>
                                        <Typography>{product.amount}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={commonBoxStyles} className={style.borderTableBottomMobile}>
                            <Box className={style.containerHeaderCharts}>
                                <Box>
                                    <Typography className={style.chartsTitles}>Faturamento</Typography>
                                    <Typography variant="h6"> <strong>R$ 2.568</strong> </Typography>
                                </Box>
                                <Button variant="outlined" size="small">Detalhes</Button>
                            </Box>
                            <Typography className={style.captionLostChart}> 2.1% ao mês anterior </Typography>
                            <Box sx={{ height: '165px', mt: 2 }}>
                                <Line data={lineData} options={lineOptions} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Dashboard;
