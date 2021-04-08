import TableHeader from '../TableHeader/TableHeader'
import CountryDetails from '../CountryDetails/CountryDetails'

const TableData = ({headerTitles, filteredCountries}) => {
    return(
        <table className="table-data">
                <TableHeader headerTitles={headerTitles} />
                <CountryDetails filteredCountries={filteredCountries} />

        </table>
    );
}

export default TableData;