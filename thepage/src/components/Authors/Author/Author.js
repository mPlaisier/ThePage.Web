import React from 'react';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';

const Author = ({ author }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" component="p">{author.name}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
              <MoreHorizIcon />
            </Button>
          </CardActions>
        </Card>
    )
}

export default Author;