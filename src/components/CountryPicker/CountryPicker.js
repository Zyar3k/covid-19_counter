import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.scss';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

  const [ fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl>
      <NativeSelect defaultValue='' onChange={(event) => handleCountryChange(event.target.value)}>
        <option value=''>global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;