import React from 'react'

import { compareValues } from '../utils/helpers.js'

function Filters({ filters }) {
    console.log('filters', filters)
    let lit = filters.map((filter) => {
        return (
            <React.Fragment>
                <label htmlFor={filter}>{filter}</label>
                <select name={filter} id={filter} defaultValue="">
                    <option></option>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>{' '}
            </React.Fragment>
        )
    })
    return <div>{lit}</div>
}

export default Filters
