import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'components/Router';
import Bath from './Bath';
import Bed from './Bed';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  rooms: {
    display: 'flex'
  }
});

export default function ListingCard(props) {
  const classes = useStyles();
  const { listing } = props;
  const photo = listing.photo
    ? listing.photo
    : listing.photos && listing.photos.length > 0
    ? listing.photos[0].PHOTO_URL
    : null;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {photo && (
          <CardMedia className={classes.media} image={photo} title="Contemplative Reptile" />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {listing.address}
          </Typography>
          <Typography gutterBottom variant="h5" component="h4">
            {listing.price} $
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {listing.propertyType} in {listing.neighborhoods}
          </Typography>
          <div className={classes.rooms}>
            <div>
              <Bath /> {listing.bathrooms} bath
            </div>
            <div>
              <Bed /> {listing.bedrooms} bed
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={`/listings/${listing.slug}`} size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
