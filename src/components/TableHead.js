import React from 'react'
import '../styles/tableHead.css'
import { sortProducts } from '../utils/helpers'
import PropTypes from 'prop-types'

function TableHead({ headers, setProducts, allProducts }) {
    function handleColumnSort(e, header) {
        let asc = e.target.className.includes('down')
        // reset all header arrows to point downwards
        document
            .querySelectorAll('.head-arrow-icon button')
            .forEach((e) => (e.className = 'fas fa-angle-down'))
        // sort products by column selected
        if (asc) {
            e.target.className = 'fas fa-angle-up'
            setProducts(sortProducts(allProducts.slice(), header, 'asc'))
        } else {
            e.target.className = 'fas fa-angle-down'
            setProducts(sortProducts(allProducts.slice(), header, 'dsc'))
        }
    }

    let header = headers.map((header) => {
        let correctedHeader = header.replace(/ /g, '-').toLowerCase()
        let arrowClass = `${correctedHeader}-arrow head-arrow-icon`

        let arrowIcon = (
            <span key={`{header}1`} className={arrowClass}>
                <button
                    className="fas fa-angle-down"
                    aria-label="sort"
                    size="small"
                    onClick={(e) => {
                        handleColumnSort(e, correctedHeader)
                    }}
                ></button>
            </span>
        )
        return (
            <th
                key={`${header}2`}
                style={{ position: 'relative' }}
                scope="col"
                className="cell cell-head"
            >
                {header ? arrowIcon : ''}
                {header}
            </th>
        )
    })
    return (
        <thead>
            <tr key="head">{header}</tr>
        </thead>
    )
}

export default TableHead

TableHead.propTypes = {
    headers: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
    allProducts: PropTypes.array.isRequired,
}
