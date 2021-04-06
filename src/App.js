import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import TableData from './Components/TableData/TableData';
import { useState, useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState("");
  const headerTitles = ["Flag", "Name", "Population", "Language", "Region" ];


 useEffect( () => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      setCountries(data)
      console.log(data[8].languages)
    })
    .catch( err => console.log('ERROR OCCURED', err))
 }, [] )
   
  return (
    <div className="App">
        <SearchBar />
        <TableData countries = {countries} headerTitles={headerTitles} />
    </div>
  );
}

export default App;
