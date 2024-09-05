import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListSubheader } from '@mui/material';
import { Info, InsertChart, Person, Settings, ShoppingCart, TableView, Wallet } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Navigation = ({ isOpen }) => {

    return (
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
    );
}

export default Navigation;