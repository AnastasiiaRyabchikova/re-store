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
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error } = this.props;
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            const { bookstoreService } = ownProps;
            dispatch(booksRequasted());
            bookstoreService
                .getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(booksError(error)));
        }
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);