import React, { useEffect, useState } from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from 'components/Router';
import ImageGallery from 'react-image-gallery';

export default function Listing() {
  const { listing } = useRouteData();

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
    </div>
  );
}
