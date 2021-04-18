import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

import NavigationBar from '../NavigationBar/NavigationBar';

import useStyles from './styles';

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <div className={classes.paper}>
                        <Typography variant="body2" >Dashboard</Typography>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default Dashboard;