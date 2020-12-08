import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import '../styles/table.css'

import Pagination from './Pagination'
import RowWithCollapsible from './RowWithCollapsible'
import TableHead from './TableHead'

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
    let [allProducts, setProducts] = useState([])

    const { loading, error, data } = useQuery(GET_PRODUCTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    if (!allProducts.length) {
        setProducts(data.allProducts)
    }

    const numPages = Math.ceil(allProducts.length / perPage)

    let products = allProducts.slice(offset, offset + perPage)

    let pagiHandler = (page) => {
        setOffset(page * 5 - 5)
        setCurrentPage(page)
    }
    let headers = [
        '',
        'Name',
        'In Buy Box',
        'Price',
        'Keyword',
        'Category',
        'Rating',
        'Reviews',
    ]

    return (
        <React.Fragment>
            <div className="tableWrapper">
                <table aria-label="collapsible table">
                    <TableHead
                        headers={headers}
                        setProducts={setProducts}
                        allProducts={allProducts}
                    />
                    <tbody>
                        {products.map((product) => (
                            <RowWithCollapsible
                                key={product.productName}
                                product={product}
                                cols={headers.length}
                            />
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
