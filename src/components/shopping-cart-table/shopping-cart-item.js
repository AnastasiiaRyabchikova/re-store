import './shopping-cart-table.css';
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

export default ({ index, id, title, count, price, onDelete, onDecrease, onIncrease }) => (
    <TableRow>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{title}</TableCell>
        <TableCell align="center">{count}</TableCell>
        <TableCell align="center">{price * count}</TableCell>
        <TableCell align="center">
            <Button onClick={() => onIncrease(id)}>
                <AddCircleOutlineOutlinedIcon color="action"/>
            </Button>
            <Button onClick={() => onDecrease(id)}>
                <IndeterminateCheckBoxIcon color="disabled"/>
            </Button>
            <Button onClick={() => onDelete(id)}>
                <DeleteForeverOutlinedIcon color="error"/>
            </Button>
        </TableCell>
    </TableRow>
);