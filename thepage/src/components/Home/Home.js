import React from 'react';
import { Avatar, Button, TextField, Link, Container, Box, Grid, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import SyncLoader from "react-spinners/PulseLoader";

import { signin } from '../../actions/auth';

import useStyles from './styles';
import './index.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © ThePage '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const authData = useSelector(state => state.auth);

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin({username: authData.username, password: authData.password }, history));
    }

    const handleChange = (e) => {
        dispatch({
            type: 'FIELD',
            fieldName: e.target.name,
            payload: e.target.value,
        })
    };

    return (
        <Container component="main" className={classes.root} maxWidth={false}>
            <Container maxWidth="sm">
                <Paper className={classes.paper} elevation={3}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">Sign in</Typography>
                            {(authData?.error) && (
                                <div className={classes.alert}>
                                    <Alert severity="warning">{(authData.error)}</Alert>
                                </div>
                            )}
                            {!authData.isLoading ?
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    placeholder="Username"
                                    autoComplete="username"
                                    name="username"
                                    autoFocus
                                    value={authData.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="password"
                                    id="password"
                                    value={authData.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                > 
                                    {authData.isLoading ? 'Signing In...' : 'Sign In'}
                                </Button>
                                <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                                </Grid>
                                <Box mt={5}>
                                <Copyright />
                                </Box>
                            </form>
                            : 
                               <div className={classes.loader}>
                                    <SyncLoader color="#cccccc" />
                               </div>
                            }   
                        </div>
                </Paper>
            </Container>
        </Container>
  );
}