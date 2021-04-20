import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { Container, Grid } from '@material-ui/core';

import NavigationBar from '../NavigationBar/NavigationBar';
import Author from './Author/Author';
import { getAuthors } from '../../actions/author'

import useStyles from './styles';

const Authors = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const authors = useSelector(state => state.authors);

    useEffect(() => {
        dispatch(getAuthors(history));
    }, [dispatch, history]); 

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Container>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        authors?.docs.map((author) => (
                            <Grid key={author.id} item xs={12} sm={3}>
                                <Author author={author} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            
        </div>
    );
};

export default Authors;