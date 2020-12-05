import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Pagination from './Pagination'
import Row from './Row'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

const GET_PRODUCTS = gql`
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
    const perPage = 5
    let [offset, setOffset] = useState(0)
    let [currentPage, setCurrentPage] = useState(1)

    const { loading, error, data } = useQuery(GET_PRODUCTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const numPages = Math.ceil(data.allProducts.length / perPage)

    let products = data.allProducts.slice(offset, offset + perPage)
    let pagiHandler = (page) => {
        setOffset(page * 5 - 5)
        setCurrentPage(page)
    }

    return (
        <React.Fragment>
            <TableContainer
                style={{ marginTop: '5%', marginLeft: '25%', width: '50%' }}
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
                <Pagination
                    numPages={numPages}
                    page={currentPage}
                    pagiHandler={pagiHandler}
                />
            </TableContainer>
        </React.Fragment>
    )
}

export default TableWrapper
