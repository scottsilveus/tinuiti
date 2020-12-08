import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import '../styles/table.css'

import Pagination from './Pagination'
import RowWithCollapsible from './RowWithCollapsible'
import TableHead from './TableHead'
import SearchFilter from './SearchFilter'

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
    const headers = [
        '',
        'Name',
        'In Buy Box',
        'Price',
        'Keyword',
        'Category',
        'Rating',
        'Reviews',
    ]

    let [offset, setOffset] = useState(0)
    let [currentPage, setCurrentPage] = useState(1)
    let [allProducts, setProducts] = useState([])
    let [filteredProducts, setFilteredProducts] = useState([])
    let [filterType, setFilterType] = useState('productName')
    let [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        let results = allProducts.filter((product) => {
            return product[filterType].toLowerCase().includes(searchTerm)
        })
        setFilteredProducts(results)
    }, [searchTerm])

    const { loading, error, data } = useQuery(GET_PRODUCTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    if (!allProducts.length) {
        setProducts(data.allProducts)
    }

    //  products to be rendered; either a subset of all or filtered
    let products, numPages
    if (!filteredProducts.length) {
        products = allProducts.slice(offset, offset + perPage)
        numPages = Math.ceil(allProducts.length / perPage)
    } else {
        products = filteredProducts.slice(offset, offset + perPage)
        numPages = Math.ceil(filteredProducts.length / perPage)
    }

    let pagiHandler = (page) => {
        setOffset(page * 5 - 5)
        setCurrentPage(page)
    }

    return (
        <React.Fragment>
            <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterType={filterType}
                setFilterType={setFilterType}
                options={[
                    { name: 'Product Name', filter: 'productName' },
                    { name: 'Keyword', filter: 'keyword' },
                    { name: 'Category', filter: 'category' },
                ]}
            />
            <div className="tableWrapper">
                <table aria-label="collapsible table">
                    <TableHead
                        headers={headers}
                        setProducts={setProducts}
                        allProducts={allProducts}
                        filteredProducts={filteredProducts}
                        setFilteredProducts={setFilteredProducts}
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
