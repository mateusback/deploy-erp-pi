import React from "react";
import { useState } from 'react';
// IMPORT MUI COMPONENTS
import Box from "@mui/material/Box";
import { Container, Toolbar } from '@mui/material';
import { CssBaseline } from "@mui/material";
import Footer from "../footer/Footer";
// IMPORT INTERNAL FILES
import Header from "../header/Header";
import Sidebar from "../drawer/Sidebar";

const DashboardLayout = ({ children }) => {
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
                    {children}
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}

export default DashboardLayout;