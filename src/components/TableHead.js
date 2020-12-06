import React from 'react'
import '../styles/tableHead.css'

function TableHead({ headers }) {
    let header = headers.map((header) => {
        let classes = `${header
            .replace(/ /g, '-')
            .toLowerCase()} cell cell-head`
        return (
            <th key={header} scope="col" className={classes}>
                {header}
            </th>
        )
    })
    return (
        <thead>
            <tr>{header}</tr>
        </thead>
    )
}

export default TableHead
