import React from 'react'
import '../styles/rowStyles.css'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
})

function Row(props) {
    const { product } = props
    const [open, setOpen] = React.useState(false)
    const classes = useRowStyles()

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
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Daily Rankings
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Ranking</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {product.dailyRankings.map(
                                        (dailyRankings) => (
                                            <TableRow key={dailyRankings.date}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {dailyRankings.date}
                                                </TableCell>
                                                <TableCell>
                                                    {dailyRankings.rank}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default Row
