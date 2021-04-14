import React from 'react';

type TableHeaderProps = {
    headerTitles: string[]
}

const TableHeader = ( {headerTitles}: TableHeaderProps) => {
    return(
      
    <thead className="table-header">
        <tr>
            {headerTitles.map( (title,index) => {
                return <th key={index} >{title}</th>
            })}
        </tr>
    </thead>

    );
}

export default TableHeader;