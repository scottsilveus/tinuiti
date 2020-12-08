import React from 'react'
import '../styles/rowStyles.css'
import PropTypes from 'prop-types'

import CollapsibleTable from './CollapsibleTable'

function Row({ product, cols }) {
    const [open, setOpen] = React.useState(false)
    return (
        <React.Fragment>
            <tr style={{ borderBottom: 'unset' }}>
                <td className="arrow-icon">
                    <button
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        <i
                            className={
                                open ? 'fas fa-angle-up' : 'fas fa-angle-down'
                            }
                        ></i>
                    </button>
                </td>
                <td className="prod-name cell" component="th" scope="row">
                    <img
                        className="prod-img"
                        alt="product-img"
                        src={product.image}
                    />

                    <span>{product.productName}</span>
                </td>
                <td className="buy-box cell align-center">
                    {String(product.inBuybox)}
                </td>
                <td className="price cell align-center">{product.price}</td>
                <td className="keyword cell align-center">{product.keyword}</td>
                <td className="category cell align-center">
                    {product.category}
                </td>
                <td className="rating cell align-center">
                    {product.reviews[0].rating}
                </td>
                <td className="reviews cell align-center">
                    {product.reviews[0].count}
                </td>
            </tr>
            <tr>
                <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={cols}>
                    <CollapsibleTable
                        dailyRankings={product.dailyRankings}
                        open={open}
                    />
                </td>
            </tr>
        </React.Fragment>
    )
}

export default Row
