import React from "react";
import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from "./header/Header";
import Sidebar from "./SideBar/Sidebar";
import IndexDashboard from "../pages/dashboard";

const DefaultLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} />
            <IndexDashboard isOpen={isSidebarOpen} />
        </Box>
    );
}

export default DefaultLayout;