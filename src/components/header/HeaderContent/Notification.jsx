import React from "react";
import { useState } from "react";
// IMPORT MUI COMPONENTS
import { Badge } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notification = () => {
    const [read] = useState(2);
    return (
        <Box sx={{ flexShrink: 0, ml: 0.70 }}>
            <IconButton
                variant="light"
                aria-label="open profile"
                aria-haspopup="true"
                sx={{ color: '#F22598' }}
            >
                <Badge
                    badgeContent={read}
                    sx={{ fontSize: '0.5rem', mr: '1.5rem' }}
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Box>
    );
};

export default Notification;