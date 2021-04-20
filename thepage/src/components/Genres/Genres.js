import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { Container, Grid } from '@material-ui/core';

import NavigationBar from '../NavigationBar/NavigationBar';
import Genre from './Genre/Genre';
import { getGenres } from '../../actions/genre'

import useStyles from './styles';

const Genres = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres(history));
    }, [dispatch, history]); 

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Container>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        genres?.docs.map((genre) => (
                            <Grid key={genre.id} item xs={12} sm={3}>
                                <Genre genre={genre} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Genres;