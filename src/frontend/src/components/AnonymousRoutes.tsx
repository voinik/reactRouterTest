import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { RegisterPage } from './pages/LandingPage/RegisterPage';

export function AnonymousRoutes() {
    return (
        <Switch>
            <Route path="/" exact>
                <LandingPage />
            </Route>
            <Route path="/register" exact>
                <RegisterPage />
            </Route>
            <Route>
                {/* This is necessary to redirect to the proper pages when logging in and out. We can figure out another way if we really need 404 pages */}
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}
