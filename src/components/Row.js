import React from 'react'
import '../styles/rowStyles.css'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import CollapsibleTable from './CollapsibleTable'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
})

function Row({ product }) {
    const classes = useRowStyles()
    const [open, setOpen] = React.useState(false)

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell className="arrow-icon">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell className="prod-name" component="th" scope="row">
                    <img className="prod-img" alt="" src={product.image} />

                    <span>{product.productName}</span>
                </TableCell>
                <TableCell className="buy-box" align="center">
                    {String(product.inBuybox)}
                </TableCell>
                <TableCell className="price" align="center">
                    {product.price}
                </TableCell>
                <TableCell className="keyword" align="center">
                    {product.keyword}
                </TableCell>
                <TableCell className="category" align="center">
                    {product.category}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <CollapsibleTable
                        dailyRankings={product.dailyRankings}
                        open={open}
                    />
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default Row
