import React from 'react';
import Spinner from '../spinner';
import { withBookstoreServices } from '../hoc'

const App = () => {
    return (
        <div>
            <Spinner />
        </div>
    )
}

export default withBookstoreServices()(App);