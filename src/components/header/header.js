import './header.css';
import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';


const Header = ({numitems, total}) => (
        <header className="header">
            <Link to="/" className="header__logo">ReStore</Link>
            <Link to="/cart" className="header__cart">
                <ShoppingCartIcon color="primary"/>
                <div className="header__cart-wrp">
                    <span>{numitems} items</span>
                    <span>{total}$</span>
                </div>
            </Link>
        </header>
)

export default Header;