import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import BookstoreServices from './services/bookstore-service';
import { BookstoreServicesProvider } from './components/bookstore-service-context';
import store from './store';

const bookstoreServices = new BookstoreServices();

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundry>
            <BookstoreServicesProvider value={ bookstoreServices }>
                <Router>
                    <App/>
                </Router>
            </BookstoreServicesProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);