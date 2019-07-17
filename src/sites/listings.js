import React, { useState } from 'react';
import { useRouteData } from 'react-static';
//
import Grid from '@material-ui/core/Grid';
import ListingCard from '../components/ListingCard';
import ReactPaginate from 'react-paginate';
import { navigate } from 'components/Router';
import IntegrationReactSelect from '../components/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import querystring from 'query-string';
import axios from 'axios';

import * as _ from 'lodash';

function valuetext(value) {
  return `${value}M $`;
}

const marks = Array.apply(null, { length: 3 }).map((_item, index) => ({
  value: (index + 1) * 3,
  label: `${(index + 1) * 3}M$`
}));

const bedroomsMarks = Array.apply(null, { length: 3 }).map((_item, index) => ({
  value: index * 2,
  label: `${index ? index * 2 : 'studio'}`
}));

const typeOfPropertyOptions = [
  {
    value: 'Condo',
    label: 'Condo'
  },
  {
    value: 'Coop',
    label: 'Coop'
  },
  {
    value: 'House',
    label: 'House'
  },
  {
    value: 'Townhouse',
    label: 'Townhouse'
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function Listings() {
  const { listings, currentPage, totalPages } = useRouteData();

  const classes = useStyles();
  const [values, setValues] = useState({
    type: 'Townhouse',
    neighborhood: [{ label: 'Murray Hill', value: 'Murray Hill' }],
    minprice: 0.2,
    maxprice: 2,
    minbedrooms: 0,
    maxbedrooms: 2
  });

  const [listingsDynamic, setListings] = useState([]);

  const handleChange = name =>
    _.debounce(async (e, v) => {
      if (name === 'price' || name === 'bedrooms') {
        const range = { [`min${name}`]: v[0], [`max${name}`]: v[1] };
        const newValues = { ...values, ...range };
        await getListings(newValues);
      } else {
        const value = Array.isArray(e) ? e : e.target.value;
        const newValues = { ...values, [name]: value };
        await getListings(newValues);
      }
    }, 300);

  const handleTypeChange = async e => {
    const newValues = { ...values, type: e.target.value };
    await getListings(newValues);
  };

  const getListings = async newValues => {
    setValues(newValues);

    const params = Object.keys(newValues).reduce((obj, key) => {
      const value = newValues[key];
      const newValue = Array.isArray(value) ? value.map(item => item.value) : value;
      return { ...obj, [key]: newValue };
    }, {});

    const query = querystring.stringify(params);
    const newListings = await axios.get(`/.netlify/functions/listings?${query}`);
    setListings(newListings.data);
  };

  const handlePageClick = data => {
    console.log(data);
    navigate(`/listings/page/${data.selected}`);
  };

  const list = listingsDynamic.length ? listingsDynamic : listings;

  return (
    <div>
      <h1>Listings</h1>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <IntegrationReactSelect
            onChange={handleChange('neighborhood')}
            value={values.neighborhood}
          />

          <Typography id="discrete-slider" gutterBottom>
            Price
          </Typography>
          <Slider
            defaultValue={[values.minprice, values.maxprice]}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            onChange={handleChange('price')}
            aria-labelledby="range-slider"
            marks={marks}
            step={0.2}
            min={0.2}
            max={12}
          />

          <Typography id="bedrooms-slider" gutterBottom>
            Bedrooms
          </Typography>
          <Slider
            defaultValue={[values.minbedrooms, values.maxbedrooms]}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            onChange={handleChange('bedrooms')}
            aria-labelledby="range-slider"
            marks={bedroomsMarks}
            step={0.5}
            min={0}
            max={6}
          />
          <TextField
            id="outlined-select-currency-native"
            select
            label="Type of property"
            className={classes.textField}
            value={values.type}
            onChange={e => handleTypeChange(e)}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            margin="normal"
            variant="outlined"
          >
            {typeOfPropertyOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {list.map(li => (
              <Grid key={li.slug} item xs={12} md={4}>
                <ListingCard listing={li} />
              </Grid>
            ))}
          </Grid>
        </Grid>
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
