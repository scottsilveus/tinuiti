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

function TableWrapper() {
    const { loading, error, data } = useQuery(PRODUCTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    let products = data.allProducts
    console.log('data', data)
    return (
        <React.Fragment>
            <TableContainer
                style={{ marginLeft: '25%', width: '50%' }}
                component={Paper}
            >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell style={{ paddingLeft: '32px' }}>
                                Name
                            </TableCell>
                            <TableCell className="buy-box" align="center">
                                In Buy Box
                            </TableCell>
                            <TableCell className="price" align="center">
                                Price
                            </TableCell>
                            <TableCell align="center">Keyword</TableCell>
                            <TableCell align="center">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <Row key={product.productName} product={product} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default TableWrapper
