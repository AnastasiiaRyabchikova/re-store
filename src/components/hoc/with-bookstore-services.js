import React from 'react';

import { BookstoreServicesConsumer } from '../bookstore-service-context';


const withBookstoreService = () => (View) => (
    (params) => (
        <BookstoreServicesConsumer>
            {
                (bookstoreServices) => (
                    <View { ...params } bookstoreService={ bookstoreServices }/>
                )
            }
        </BookstoreServicesConsumer>
    )
)

export default withBookstoreService;