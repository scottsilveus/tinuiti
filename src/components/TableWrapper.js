import React from 'react'

// import TableHead from '@material-ui/core/TableHead'
import Pagination from './Pagination'
import Row from './Row'
import TableHead from './TableHead'
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

    let headers = ['', 'Name', 'In Buy Box', 'Price', 'Keyword', 'Category']

    return (
        <React.Fragment>
            <div className="tableWrapper">
                <table aria-label="collapsible table">
                    <TableHead headers={headers} />
                    <tbody>
                        {products.map((product) => (
                            <Row key={product.productName} product={product} />
                        ))}
                    </tbody>
                </table>
                <Pagination
                    numPages={numPages}
                    page={currentPage}
                    pagiHandler={pagiHandler}
                />
            </div>
        </React.Fragment>
    )
}

export default TableWrapper
