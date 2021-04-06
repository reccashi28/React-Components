//populating details of countries
const CountryDetails = ( {countries} ) => {
    return(
        <tbody>
             {
                 countries.map( (country, index) => {
                     return (
                        <tr key={index}>
                            <td><img src={country.flag} alt="Flag"/></td>
                            <td>{country.name}</td>
                            <td>{country.population}</td>
                           <td>{country.languages[0].name}</td>
                            <td>{country.region}</td>
                    </tr>                     
                    )
                })
            }
             
        </tbody>
    );
}

export default CountryDetails;