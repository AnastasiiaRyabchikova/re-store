import React from 'react';

import { BookstoreServicesConsumer } from '../bookstore-service-context';


const withBookstoreServices = () => (View) => (
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

export default withBookstoreServices;