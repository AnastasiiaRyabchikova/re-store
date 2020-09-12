import './book-list.css';

import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-services';
class BookList extends Component {
    componentDidMount() {
        const { bookstoreService } = this.props;
        console.log('bookstoreService: ', bookstoreService);
        const data = bookstoreService.getBooks();
        console.log(data);

        this.props.booksLoaded(data);
    }
    render() {
        const { books } = this.props;
        console.log(books);
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ( { books } ) => {
    return { books }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch({
                type: 'BOOKS_LOADED',
                payload: newBooks
            });
        }
    }
}

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
    );