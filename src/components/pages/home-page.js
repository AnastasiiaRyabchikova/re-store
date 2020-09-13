import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
    
    return (
        <main className="main">
            <BookList/>
            <ShoppingCartTable/>
        </main>
    )
}

export default HomePage;