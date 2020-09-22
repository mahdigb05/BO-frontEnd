import React, { Component } from 'react'
import TableRow from '../TableRow';

const Table = () => {

    return(
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th>head</th>
                    <th>head</th>
                    <th>head</th>
                    <th>head</th>
                </tr>
            </thead>
            <TableRow />
        </table>
    )
}

export default Table;