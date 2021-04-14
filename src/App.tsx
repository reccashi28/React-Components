import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import TableData from './Components/TableData/TableData';
import React, { useState, useEffect } from 'react';
import { Country } from './types';

function App() {

  const [countries, setCountries] = useState<Country[]>([]);
  const headerTitles: string[] = ["Flag", "Name", "Population", "Language", "Region" ];
  const [searchField, setSearchField] = useState('');
  let filteredCountries: Country[] = [];

 useEffect( () => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      setCountries(data)
    })
    .catch( err => console.log('ERROR OCCURED', err))
 }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value)
  }

  //check that countries is not empty
  countries.length && (
                      filteredCountries = countries.filter( country =>{
                        return country.name.toLowerCase().includes(searchField.toLowerCase());
  }))

  return (
  //check if data is not empty before passing in
    !countries.length ? <h1>Loading data...</h1> :
                      (
                        <div className="App">
                            <SearchBar onSearchChange={onSearchChange}/>
                            <TableData headerTitles={headerTitles} filteredCountries={filteredCountries} />
                        </div>
                      )
  );
}

export default App;
