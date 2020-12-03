import React from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Row from './Row'
import { gql, useQuery } from '@apollo/client'

const PRODUCTS = gql`
    query GetAllProductNames {
        allProducts {
            productId
            productName
            inBuybox
            price
            image
            keyword
            dailyRankings
            category
            productDescription
            reviews
        }
    }
`

function CollapsibleTable() {
    const { loading, error, data } = useQuery(PRODUCTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    let products = data.allProducts
    console.log('data', data)

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Name</TableCell>
                        <TableCell align="right">In Buy Box</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Keyword</TableCell>
                        <TableCell align="right">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <Row key={product.productName} product={product} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CollapsibleTable
