import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import { polyfill } from 'es6-promise';
import 'font-awesome/css/font-awesome.min.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './components/App';

// styles
import './assets/scss/office-book.scss';
import './scss/officeBook.scss';

polyfill();

const browserHistory = createBrowserHistory();

if (document.getElementById('app')) {
    render(
        <Router history={browserHistory} >
            <App />
        </Router>,
        document.getElementById('app')
    );
}
