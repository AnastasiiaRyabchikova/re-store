import React from 'react';

import { BookstoreServicesConsumer } from '../bookstore-service-context';


const withBookstoreServices = () => (View) => (
    (params) => (
        <BookstoreServicesConsumer>
            {
                (bookstoreServices) => (
                    <View { ...params } getData={ bookstoreServices }/>
                )
            }
        </BookstoreServicesConsumer>
    )
)

export default withBookstoreServices;