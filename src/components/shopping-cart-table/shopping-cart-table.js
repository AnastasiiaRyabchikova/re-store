import './shopping-cart-table.css';
import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ShoppingCartItem from './shopping-cart-item';

function ShoppingCartTable({ items, onIncrease, onDecrease, onDelete }) {
    const totalCalc = items.reduce((accum, { price, count }) => (accum + count * price), 0);
    return (
        <div className="shopping-cart-table"> 
            <h2>Your order</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="center">Count</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            console.log(items)
                        }
                        {items.map((item, index) => (
                            <ShoppingCartItem
                                key={item.id}
                                {...item}
                                index={index}
                                onIncrease={onIncrease}
                                onDecrease={onDecrease}
                                onDelete={onDelete}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="shopping-cart-table__total-wrp">
                <Typography className="shopping-cart-table__total" gutterBottom variant="h6" component="div" >Total: </Typography>
                <Typography gutterBottom variant="h6" component="div" >{totalCalc}</Typography>
            </div>
        </div>
    )
}

const mapStateToProps = ({ basketItems, basketTotal }) => {
    return {
        items: basketItems,
        total: basketTotal,
    }
}

const mapDispathToProps = () => ({
    onIncrease: (id) => console.log(`Increase ${id}`),
    onDecrease: (id) => console.log(`Decrease ${id}`),
    onDelete: (id) => console.log(`Delete ${id}`),
})

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCartTable);


