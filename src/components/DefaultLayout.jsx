import React from "react";
import Box from "@mui/material/Box";
import Header from "./header/Header";
import Sidebar from "./SideBar/Sidebar";

import { useState } from 'react';
import { Container, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { CssBaseline } from "@mui/material";
import Footer from "./footer/Footer";
import IndexDashboard from "../pages/dashboard";


const DefaultLayout = ({ Children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, marginLeft: isSidebarOpen ? '240px' : '60px', transition: 'margin-left 0.3s' }}
            >
                <Toolbar />
                <Container>
                    <Typography paragraph>
                        <IndexDashboard />
                    </Typography>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}

export default DefaultLayout;