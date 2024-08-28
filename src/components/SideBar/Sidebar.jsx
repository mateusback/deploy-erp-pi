import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Dashboard, Settings, Assessment, Menu } from '@mui/icons-material';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: isOpen ? 240 : 60,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: isOpen ? 240 : 60,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                },
            }}
        >
            <IconButton onClick={toggleSidebar} sx={{ margin: '8px' }}>
                <Menu />
            </IconButton>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Dashboard" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Assessment />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Relatórios" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    {isOpen && <ListItemText primary="Configurações" />}
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;
