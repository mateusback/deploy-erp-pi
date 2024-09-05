import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid } from '@mui/material';

const StatusCard = ({ icon: Icon, title, description }) => {
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

const IndexDashboard = () => {

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <StatusCard
                        title="Teste Titulo"
                        description="Everything is working perfectly."
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatusCard
                        title="Teste Titulo"
                        description="Action is in progress."
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatusCard
                        title="Teste Titulo"
                        description="Something went wrong."
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default IndexDashboard;