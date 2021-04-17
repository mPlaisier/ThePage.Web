import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Container, Grid, Typography } from '@material-ui/core';

import NavigationBar from '../NavigationBar/NavigationBar';
import Book from './Book/Book';
import { getBooks } from '../../actions/book'

import useStyles from './styles';

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const books = useSelector(state => state.books);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]); 

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Container>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        books?.docs.map((book) => (
                            <Grid key={book.id} item xs={12} sm={3}>
                                <Book book={book} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            
        </div>
    );
};

export default Dashboard;