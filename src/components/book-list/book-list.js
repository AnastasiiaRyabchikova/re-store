import './book-list.css';

import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequasted, booksError } from '../../actions';
import { compose } from '../../utils'; 

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequasted, booksError } = this.props;
        booksRequasted();
        bookstoreService
            .getBooks()
            .then((data) => booksLoaded(data))
            .catch((error) => booksError(error));
    }
    render() {
        const { books, loading, error } = this.props;
        console.log({books, loading, error});
        console.log(ErrorIndicator);
        if (loading) return <Spinner />;
        if (error) return <ErrorIndicator />;
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id} className="book-list__item">
                                <BookListItem book={book}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ( { books, loading, error } ) => {
    return { books, loading, error }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequasted,
    booksError,
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);