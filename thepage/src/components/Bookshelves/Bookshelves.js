import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { Container, Grid } from '@material-ui/core';

import NavigationBar from '../NavigationBar/NavigationBar';
import Bookshelf from './Bookshelf/Bookshelf';
import { getBookshelves } from '../../actions/bookshelf'

import useStyles from './styles';

const Authors = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const bookshelves = useSelector(state => state.bookshelves);

    useEffect(() => {
        dispatch(getBookshelves(history));
    }, [dispatch, history]); 

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Container>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        bookshelves?.docs.map((bookshelf) => (
                            <Grid key={bookshelf.id} item xs={12} sm={3}>
                                <Bookshelf bookshelf={bookshelf} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Authors;