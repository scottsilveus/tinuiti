import React from 'react'
import '../styles/tableHead.css'
import { sortProducts } from '../utils/helpers'
import PropTypes from 'prop-types'

function TableHead({ headers, setProducts, allProducts }) {
    let header = headers.map((header) => {
        let correctedHeader = header.replace(/ /g, '-').toLowerCase()
        let arrowClass = `${correctedHeader}-arrow head-arrow-icon`

        let arrowIcon = (
            <span key={header} className={arrowClass}>
                <button
                    aria-label="sort"
                    size="small"
                    onClick={(e) => {
                        let ele = e.target
                        let asc = ele.className.includes('down')
                        document
                            .querySelectorAll('.head-arrow-icon i')
                            .forEach((e) => (e.className = 'fas fa-angle-down'))
                        // BUG sometimes the arrow rotates and extra 45 degrees
                        // turning the arrow diagnal
                        // change from css arrows to svg img
                        if (asc) {
                            ele.className = 'fas fa-angle-up'
                            setProducts(
                                sortProducts(
                                    allProducts.slice(),
                                    correctedHeader,
                                    'asc'
                                )
                            )
                        } else {
                            ele.className = 'fas fa-angle-down'
                            setProducts(
                                sortProducts(
                                    allProducts.slice(),
                                    correctedHeader,
                                    'dsc'
                                )
                            )
                        }

                        console.log(e.target.className)
                    }}
                >
                    <i class="fas fa-angle-down"></i>
                </button>
            </span>
        )
        return (
            <React.Fragment>
                <th
                    style={{ position: 'relative' }}
                    scope="col"
                    className="cell cell-head"
                >
                    {header ? arrowIcon : ''}
                    {header}
                </th>
            </React.Fragment>
        )
    })
    return (
        <thead>
            <tr>{header}</tr>
        </thead>
    )
}

export default TableHead

TableHead.propTypes = {
    headers: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
    allProducts: PropTypes.array.isRequired,
}
