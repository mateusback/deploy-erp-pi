// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

const Sidebar = ({ isOpen }) => {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 200,
                    boxSizing: 'border-box',
                    top: '0',
                },
            }}
        >
            <Toolbar />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Option 1" />
                </ListItem>
                {/* Adicione mais itens conforme necessário */}
            </List>
        </Drawer>
    );
}

export default Sidebar;
