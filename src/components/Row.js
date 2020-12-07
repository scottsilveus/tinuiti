import React from 'react'
import '../styles/rowStyles.css'
import PropTypes from 'prop-types'

import CollapsibleTable from './CollapsibleTable'

function Row({ product }) {
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
                        <i className={open ? 'arrow up' : 'arrow down'}></i>
                    </button>
                </td>
                <td className="prod-name cell" component="th" scope="row">
                    <img className="prod-img" alt="" src={product.image} />

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
            </tr>
            <tr>
                <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
