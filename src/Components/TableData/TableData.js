import TableHeader from '../TableHeader/TableHeader'
import CountryDetails from '../CountryDetails/CountryDetails'

const TableData = ({headerTitles, countries}) => {
    return(
        <table className="table-data">
            <TableHeader headerTitles={headerTitles} />
            <CountryDetails countries = {countries} />
        </table>
    );
}

export default TableData;