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
                    <DashboardIcon className={classes.linkIcon} />
                    <Link
                        key='Dashboard'
                        to="/dashboard"
                        className={classes.toolbarLink}
                    >Dashboard</Link>

                    <MenuBookIcon className={classes.linkIcon} />
                    <Link
                        key='Books'
                        to="/books"
                        className={classes.toolbarLink}
                    >Books</Link>

                    <PersonIcon className={classes.linkIcon} />
                    <Link
                        key='Authors'
                        to="/dashboard"
                        className={classes.toolbarLink}
                    >Authors</Link>

                    <FaTheaterMasks className={classes.linkIcon} />
                    <Link
                        key='Genres'
                        to="/dashboard"
                        className={classes.toolbarLink}
                    >Genres</Link>

                    <IoLibraryOutline className={classes.linkIcon} />
                    <Link
                        key='Bookshelves'
                        to="/dashboard"
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