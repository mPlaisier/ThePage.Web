import React from 'react';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';

const Book = ({book}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">{book.title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">By {book.author?.name}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
              <MoreHorizIcon />
            </Button>
          </CardActions>
        </Card>
    )
}

export default Book;