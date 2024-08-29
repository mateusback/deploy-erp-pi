// Importe React
import React from 'react';
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
import sidebar from './Sidebar.css'
import LogoSVG from '../Img/logo.svg'

const Sidebar = ({ isOpen }) => {
    return (
        <Drawer
            className={`topbar ${isOpen ? 'expanded' : 'collapsed'}`}
            variant="permanent"
            sx={{
                width: isOpen ? 240 : 70,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: isOpen ? 240 : 70,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isOpen ? 'flex-start' : 'center',
                    margin: '8px',
                    padding: isOpen ? '0 16px' : '0',
                }}
            >
                <img src={LogoSVG} alt="Logo" style={{ width: isOpen ? '40px' : '30px', transition: 'width 0.3s' }} />
                {isOpen && (
                    <Typography variant="h6" sx={{ marginLeft: '25px', color: '#f6a9c3' }}>
                        snacktime
                    </Typography>
                )}
            </Box>
            <List
                sx={{ width: '100%', maxWidth: 370, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Menu
                    </ListSubheader>
                }
            >
                <ListItem button>
                    <ListItemIcon>
                        <InsertChart />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Visão Geral" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Balcão" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <TableView />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Comandas" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Wallet />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Carteiras" />}
                </ListItem>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 370, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
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
        </Drawer>
    );
}

export default Sidebar;
