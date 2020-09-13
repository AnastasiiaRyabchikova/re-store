import './shopping-cart-table.css';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Typography from '@material-ui/core/Typography';

export default function ShoppingCartTable() {
    const items = [
            {
                id: 1,
                price: 300,
                count: 3,
                title: "Winnie-the-Pooh",
                author: "Alan Alexander Milne"
            },
            {   
                id: 2,
                price: 200,
                count: 3,
                title: "Jeeves and Wooster stories",
                author: "P.G.Wodehouse"
            }
        ];
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
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            items.map(({id, title, price, count}, index) => (
                                <TableRow key={id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{title}</TableCell>
                                    <TableCell align="center">{count}</TableCell>
                                    <TableCell align="center">{price}</TableCell>
                                    <TableCell align="center">
                                        <Button>
                                            <AddCircleOutlineOutlinedIcon color="success"/>
                                        </Button>
                                        <Button>
                                            <IndeterminateCheckBoxIcon color="warning"/>
                                        </Button>
                                        <Button>
                                            <DeleteForeverOutlinedIcon color="error"/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="shopping-cart-table__total-wrp">
                <Typography className="shopping-cart-table__total" gutterBottom variant="h6" component="div" >Total: </Typography>
                <Typography gutterBottom variant="h6" component="div" > 300</Typography>
            </div>
        </div>
    )
}