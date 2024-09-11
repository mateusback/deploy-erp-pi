import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// IMPORT MUI COMPONENTS
import { List, Tooltip } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListSubheader } from '@mui/material';
// IMPORT MUI ICONS
import { Info, InsertChart, Person, Settings, ShoppingCart, TableView, Wallet } from '@mui/icons-material';
// IMPORT INTERNAL FILES
import '../Sidebar.css';

const menuItems = [
    { text: 'Visão Geral', icon: <InsertChart />, path: '/dashboard' },
    { text: 'Balcão', icon: <ShoppingCart />, path: '#' },
    { text: 'Comandas', icon: <TableView />, path: '#' },
    { text: 'Carteiras', icon: <Wallet />, path: '#' },
];

const otherItems = [
    { text: 'Configurações', icon: <Settings />, path: '#' },
    { text: 'Clientes', icon: <Person />, path: '#' },
    { text: 'Ajuda', icon: <Info />, path: '#' },
];

const Navigation = ({ isOpen }) => {
    const [selectedIndex, setSelectedIndex] = useState();

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };


    const renderListItems = (items, offset = 0) =>
        items.map((item, index) => (
            <Tooltip title={isOpen ? '' : item.text} placement="left" arrow key={item.text}>
                <ListItem
                    button
                    className='list-item'
                    component={Link}
                    to={item.path}
                    selected={selectedIndex === index + offset}
                    onClick={() => handleListItemClick(index + offset)}
                >
                    <ListItemIcon className='list-item-icon'>{item.icon}</ListItemIcon>
                    {isOpen && <ListItemText primary={item.text} />}
                </ListItem>
            </Tooltip>
        ));

    return (
        <List className='sidebar-list' sx={{ width: '100%', maxWidth: 370 }} component="nav">
            <ListSubheader className={`sidebar-header ${isOpen ? '' : 'closed'}`} component="div">
                Menu
            </ListSubheader>
            {renderListItems(menuItems)}

            <ListSubheader className={`sidebar-header ${isOpen ? '' : 'closed'}`} component="div">
                Outros
            </ListSubheader>
            {renderListItems(otherItems, menuItems.length)}
        </List>
    );
};

export default Navigation;
