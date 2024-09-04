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
                className='sidebar-list'
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
                <ListItem button className='list-item' component={Link} to="/visao-geral">
                    <ListItemIcon className='list-item-icon'>
                        <InsertChart />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Visão Geral" />}
                </ListItem>
                {/* Segundo botão */}
                <ListItem button className='list-item' component={Link} to="/balcao">
                    <ListItemIcon className='list-item-icon'>
                        <ShoppingCart />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Balcão" />}
                </ListItem>
                {/* Terceiro botão */}
                <ListItem button className='list-item' component={Link} to="/comandas">
                    <ListItemIcon className='list-item-icon'>
                        <TableView />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Comandas" />}
                </ListItem>
                {/* Quarto botão */}
                <ListItem button className='list-item' component={Link} to="/carteiras">
                    <ListItemIcon className='list-item-icon'>
                        <Wallet />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Carteiras" />}
                </ListItem>

                {/* Separador */}
                <ListSubheader className='sidebar-header' component="div" id="nested-list-subheader">
                    Outros
                </ListSubheader>

                {/* Config */}
                <ListItem button className='list-item'>
                    <ListItemIcon className='list-item-icon'>
                        <Settings />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Configurações" />}
                </ListItem>
                {/* Clientes */}
                <ListItem button className='list-item'>
                    <ListItemIcon className='list-item-icon'>
                        <Person />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Clientes" />}
                </ListItem>
                {/* Ajuda */}
                <ListItem button className='list-item'>
                    <ListItemIcon className='list-item-icon'>
                        <Info />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Ajuda" />}
                </ListItem>
            </List>
        </Drawer >
    );
}

export default Sidebar;
