import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';

const Author = ({ bookshelf }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" component="p">{bookshelf.name}</Typography>
          </CardContent>
        </Card>
    )
}

export default Author;