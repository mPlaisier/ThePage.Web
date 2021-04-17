import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Books from './components/Books/Books';

const App = () => (
    <BrowserRouter>
        <Container maxWidth={false} disableGutters={true}>
            <Switch>
                <PublicRoute restricted={true} component={Home} path="/" exact />
                <PrivateRoute path="/dashboard" exact component={DashBoard} />
                <PrivateRoute path="/books" exact component={Books} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;