//populating details of countries
const CountryDetails = ( {filteredCountries} ) => {
    return(
        <tbody>
               {  filteredCountries.map( (country) => {
                     return (
                        <tr key={country.name}>
                            <td><img src={country.flag} alt="Flag"/></td>
                            <td>{country.name}</td>
                            <td>{country.population}</td>
                            <td>{country.languages.map( lang => lang.name).join(", ")}</td>
                            <td>{country.region}</td>
                        </tr>                     
                    )
                })}
        </tbody>
    );
}

export default CountryDetails;