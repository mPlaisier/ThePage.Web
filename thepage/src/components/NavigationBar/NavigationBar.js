import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBookOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import { IoLibraryOutline } from 'react-icons/io5';
import { FaTheaterMasks } from 'react-icons/fa';

import useStyles from './styles';

const NavigationBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
    };

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}> 
                <Typography variant="h5">ThePage</Typography>
            </Toolbar>
            <Toolbar component="nav" className={classes.toolbar} >
                    <DashboardIcon color="white" className={classes.linkIcon} />
                    <Link
                        noWrap
                        key='Dashboard'
                        to="/dashboard"
                        className={classes.toolbarLink}
                    >Dashboard</Link>

                    <MenuBookIcon color="white" className={classes.linkIcon} />
                    <Link
                        noWrap
                        key='Books'
                        to="/books"
                        className={classes.toolbarLink}
                    >Books</Link>

                    <PersonIcon color="white" className={classes.linkIcon} />
                    <Link
                        noWrap
                        key='Authors'
                        className={classes.toolbarLink}
                    >Authors</Link>

                    <FaTheaterMasks color="white" className={classes.linkIcon} />
                    <Link
                        noWrap
                        key='Genres'
                        className={classes.toolbarLink}
                    >Genres</Link>

                    <IoLibraryOutline color="white" className={classes.linkIcon} />
                    <Link
                        noWrap
                        key='Bookshelves'
                        className={classes.toolbarLink}
                    >Bookshelves</Link>

                    <div className={classes.logout}>
                        <Button
                            variant="contained"
                            color="secondary"
                            position="right"
                            className={classes.logoutButton}
                            onClick={handleLogout}
                        >Sign Out</Button>
                    </div>
            </Toolbar>
        </AppBar>
)};

export default NavigationBar;