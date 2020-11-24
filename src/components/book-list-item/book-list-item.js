import './book-list-item.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 300,
  },
  price: {
    color: '#3f51b5',
    fontWeight: 'bold'
  }
});

export default function BookListItem({ book, onAddToCard }) {
  const { title, author, price } = book;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://placehold.it/350x300"
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a">
            { title }
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            { author } <span className={classes.price}>{`${price}$`}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
        variant="contained"
        color="primary"
        onClick={onAddToCard}
      > Add to cart </Button>
      </CardActions>
    </Card>
  );
}
