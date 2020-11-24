import './book-list.css';

import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddToCart } from '../../actions';
import { compose } from '../../utils'; 

const BookList = ({ books, onAddToCard }) => (
    <ul className="book-list">
        {
            books.map((book) => {
                return (
                    <li key={book.id} className="book-list__item">
                        <BookListItem
                            book={book}
                            onAddToCard={() => {onAddToCard(book.id)}}
                        />
                    </li>
                )
            })
        }
    </ul>
);

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error, onAddToCard } = this.props;
        if (loading) return <Spinner />;
        if (error) return <ErrorIndicator />;
        return <BookList books={books} onAddToCard={onAddToCard} />
    }
}

const mapStateToProps = ( { books, loading, error } ) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddToCard: (id) => dispatch(bookAddToCart(id)),
})

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);