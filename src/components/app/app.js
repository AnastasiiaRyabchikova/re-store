import React from 'react';
import Header from '../header';
import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
const App = ({ cartTotal, cartAmount }) => {
    return (
        <React.Fragment>
            <Header numitems={cartAmount} total={cartTotal}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage} />
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = ({ shopingCart: { cartAmount, cartTotal } }) => {
    return {
        cartTotal,
        cartAmount,
    };
};

export default connect(mapStateToProps)(App);