import React from 'react';

import { BookstoreServiceConsumer } from '../bookstore-service-context';


const withBookstoreServices = (params) => (View) => (
    <BookstoreServiceConsumer>
        {
            (bookstoreServices) => (
                <View { ...params } getData={ bookstoreServices }/>
            )
        }
    </BookstoreServiceConsumer>
)

export default withBookstoreServices;