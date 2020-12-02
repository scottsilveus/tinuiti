import React from 'react'
import { gql, useQuery } from '@apollo/client'

const PRODUCTS = gql`
    query GetAllProductNames {
        allProducts {
            productId
            productName
        }
    }
`

function Table() {
    const { loading, error, data } = useQuery(PRODUCTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    let products = data.allProducts.map((product) => (
        <li key={product.productId} className="product-id">
            {product.productName}
        </li>
    ))
    return (
        <React.Fragment>
            <div>{products}</div>
        </React.Fragment>
    )
}

export default Table
