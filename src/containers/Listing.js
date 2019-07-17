import React, { useEffect, useState } from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from 'components/Router';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Listing() {
  const { listing } = useRouteData();

  const [slots, setSlots] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/.netlify/functions/slots`);

      setSlots(result.data);
    };

    fetchData();
  }, []);

  const generateHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    if (window.netlifyIdentity.currentUser()) {
      return window.netlifyIdentity
        .currentUser()
        .jwt()
        .then(token => {
          return { ...headers, Authorization: `Bearer ${token}` };
        });
    }
    return Promise.resolve(headers);
  };

  const handleBook = async slot => {
    const headers = await generateHeaders();
    const result = await axios.post(
      `/.netlify/functions/appointments`,
      {
        slotId: slot.id,
        start: slot.start,
        end: slot.end,
        listingSlug: listing.slug
      },
      {
        headers
      }
    );
    console.log(result);
  };

  return (
    <div>
      <Link to="/listings/">{'<'} Back</Link>
      <ImageGallery
        items={listing.photos.map(photo => ({
          original: photo.PHOTO_URL,
          thumbnail: photo.PHOTO_URL
        }))}
      />
      <h2>address</h2>
      <div>{listing.address}</div>

      <h2>price</h2>
      <div>$ {listing.price}</div>
      <div>
        {listing.propertyType} in {listing.neighborhoods}
      </div>
      <h2>description</h2>
      <div>{listing.description}</div>
      <h2>amenities</h2>
      <div>{listing.amenities}</div>
      <h2>slots</h2>
      {slots.map(slot => {
        const options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
          timeZone: 'America/Los_Angeles'
        };
        const start = new Intl.DateTimeFormat('en-US', options).format(new Date(slot.start));
        const end = new Intl.DateTimeFormat('en-US', options).format(new Date(slot.end));

        return (
          <div key={slot.id}>
            {start} - {end}
            <Button
              onClick={() => handleBook(slot)}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Book
            </Button>
          </div>
        );
      })}
    </div>
  );
}
