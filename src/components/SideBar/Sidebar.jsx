// Importe React
import React from 'react';
import { Link } from 'react-router-dom';
//Import API MUI
import { Drawer, ListSubheader, Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Box } from '@mui/material';
// Import de Icones
import { Info, InsertChart, Person, Settings, ShoppingCart, TableView, Wallet } from '@mui/icons-material';
//Import interno
import LogoSVG from '../Img/logo.svg'
import './Sidebar.css';

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
            <List
                sx={{ width: '100%', maxWidth: 370 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader className='sidebar-header' component="div" id="nested-list-subheader">
                        Menu
                    </ListSubheader>
                }
            >
                {/* Primeiro botão */}
                <ListItem button component={Link} to="/visao-geral">
                    <ListItemIcon>
                        <InsertChart />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Visão Geral" />}
                </ListItem>
                {/* Segundo botão */}
                <ListItem button component={Link} to="/balcao">
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Balcão" />}
                </ListItem>
                {/* Terceiro botão */}
                <ListItem button component={Link} to="/comandas">
                    <ListItemIcon>
                        <TableView />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Comandas" />}
                </ListItem>
                {/* Quarto botão */}
                <ListItem button component={Link} to="/carteiras">
                    <ListItemIcon>
                        <Wallet />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Carteiras" />}
                </ListItem>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 370 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader className='sidebar-header' component="div" id="nested-list-subheader">
                        Outros
                    </ListSubheader>
                }
            >
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Configurações" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Clientes" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Ajuda" />}
                </ListItem>
            </List>
        </Drawer >
    );
}

export default Sidebar;
