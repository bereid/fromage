import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 300,
    margin: '1em',
  },
  media: {
    objectFit: 'cover',
  },
};

function WSCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://www.irishtimes.com/polopoly_fs/1.3478384.1525031895!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.ws.title}
          </Typography>
          <Divider />
          <Typography component="p">
            {props.ws.description}
          </Typography>
          <Divider />
          <Typography component="p">
            From: {props.ws.time_from}
          </Typography>
          <Typography component="p">
            To: {props.ws.time_to}
          </Typography>
          <Typography component="p">
            Attendees: {props.ws.attendees}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Edit WorkShop
        </Button>
      </CardActions>
    </Card>
  );
}

WSCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WSCard);