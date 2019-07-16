import React from 'react';
import { useRouteData } from 'react-static';
//
import Grid from '@material-ui/core/Grid';
import ListingCard from '../components/ListingCard';
import ReactPaginate from 'react-paginate';
import { navigate } from 'components/Router';

export default function Listings() {
  const { listings, currentPage, totalPages } = useRouteData();

  const handlePageClick = data => {
    console.log(data);
    navigate(`/listings/page/${data.selected}`);
  };

  return (
    <div>
      <h1>Listings</h1>

      <Grid container spacing={3}>
        {listings.map(li => (
          <Grid key={li.slug} item xs={12} md={4}>
            <ListingCard listing={li} />
          </Grid>
        ))}
      </Grid>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        initialPage={currentPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}
