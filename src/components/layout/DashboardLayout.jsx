import React from "react";
import { useState } from 'react';
// IMPORT MUI COMPONENTS
import Box from "@mui/material/Box";
import { Toolbar } from '@mui/material';
import { CssBaseline } from "@mui/material";
import Footer from "../footer/Footer";
// IMPORT INTERNAL FILES
import Header from "../header/Header";
import Sidebar from "../drawer/Sidebar";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        },
        closedDrawer: {
            flexGrow: 1,
            p: 3,
            marginLeft: isSidebarOpen ? '240px' : '70px',
            transition: 'margin-left 0.3s'
        }
    }
    
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Box sx={styles.container}>
            <CssBaseline />
            <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Box
                component="main"
                sx={styles.closedDrawer}
            >
                <Toolbar />
                <div>
                    {children}
                </div>
            </Box>
            <Footer />
        </Box>
    );
}

export default DashboardLayout;