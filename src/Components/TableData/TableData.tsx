import React from 'react';
import TableHeader from '../TableHeader/TableHeader'
import CountryDetails from '../CountryDetails/CountryDetails'
import { Country } from '../../types';

type TableDataProps = {
    headerTitles: string[]
    filteredCountries: Country[]
}

const TableData = ({headerTitles, filteredCountries}: TableDataProps) => {
    return(
        <table className="table-data">
                <TableHeader headerTitles={headerTitles} />
                <CountryDetails filteredCountries={filteredCountries} />
        </table>
    );
}

export default TableData;