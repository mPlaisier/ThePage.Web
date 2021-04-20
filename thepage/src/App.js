import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Books from './components/Books/Books';
import Authors from './components/Authors/Authors';

const App = () => (
    <BrowserRouter>
        <Container maxWidth={false} disableGutters={true}>
            <Switch>
                <PublicRoute restricted={true} component={Home} path="/" exact />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/books" exact component={Books} />
                <PrivateRoute path="/authors" exact component={Authors} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;