import React from 'react';
import Spinner from '../spinner';
import { withBookstoreServices } from '../hoc'

const App = ({bookstoreService}) => {
    return (
        <div>
            <Spinner />
        </div>
    )
}

export default withBookstoreServices()(App);