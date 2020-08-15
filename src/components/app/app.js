import React from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import BookstoreServices from '../../services/bookstore-service';
import { BookstoreServiceProvider } from '../bookstore-service-context';

export default class App extends React.Component {
    
    render() { 
        return    (
            <div>
                <ErrorBoundry>
                    <BookstoreServiceProvider value={new BookstoreServices()}>
                        <Spinner />
                    </BookstoreServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}